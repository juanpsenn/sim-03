class Generador {
  constructor() {
    this.m = 4294967296;
    this.a = 1664525;
    this.c = 1013904223;
    this._last = Date.now();
  }

  getNext() {
    // this._last = (this.a * this._last + this.c) % this.m;
    // return Number(toFixed(this._last / this.m, 4));
    return Math.random();
  }
}

const {jStat} = require('jstat');

export function getSumChi(intervalos) {
  const isNumber = require('is-number');
  let chiSum = 0;

  intervalos.forEach(intervalo => {
    if (isNumber(intervalo.chi)) {
      chiSum += intervalo.chi
    }
  });
  return chiSum;
}


export function setObservedFrequencyAndChi(intervalos, secuencia) {
  secuencia.forEach(numero => {
    intervalos.forEach(intervalo => {
      if (numero <= intervalo.sup && numero > intervalo.inf) {
        intervalo.observedFreq += 1;
      }
    })
  })

  intervalos.forEach(intervalo => {
    intervalo.chi = Math.pow((intervalo.observedFreq - intervalo.expectedFreq), 2) / intervalo.expectedFreq
  })
}

export function setFrequencyNormal(intervalos, cantidad, media, desv) {
  intervalos.forEach(intervalo => {
    intervalo.expectedFreq = (
      (jStat.normal.cdf(intervalo.sup, media, desv) -
        jStat.normal.cdf(intervalo.inf, media, desv)) *
      cantidad).toFixed(2);
  })
}

export function setFrequencyUniforme(intervalos, cantidad, cantidadIntervalos) {
  intervalos.forEach(intervalo => {
    (intervalo.expectedFreq = cantidad / cantidadIntervalos).toFixed(2);
  })
}

export function setFrequencyExponencial(intervalos, cantidad, media) {
  let lambda = (1 / media);
  intervalos.forEach(intervalo => {
    intervalo.expectedFreq = (
      (jStat.exponential.cdf(intervalo.sup, Number(lambda)) - jStat.exponential.cdf(intervalo.inf, Number(lambda))) * Number(cantidad));
  })
}

export function setFrequencyPoisson(intervalos, cantidad, lambda) {
  intervalos.forEach(intervalo => {
    intervalo.expectedFreq = (
      (jStat.poisson.cdf(intervalo.sup, lambda) - jStat.poisson.cdf(intervalo.inf, lambda)) * cantidad
    ).toFixed(2);
  })
}

export function createIntervals(secuencia, cantidadIntervalos) {
  let max = arrayMax(secuencia);
  let min = arrayMin(secuencia);
  let paso = (max - min) / cantidadIntervalos;
  let intervalos = [{inf: min, sup: min + paso, observedFreq: 0}];

  for (let i = 1; i < cantidadIntervalos; i++) {
    intervalos.push({
      inf: intervalos[intervalos.length - 1].sup,
      sup: intervalos[intervalos.length - 1].sup + paso,
      observedFreq: 0
    });
  }

  return intervalos;
}

export function createIntervalsPoisson(secuencia, cantidadIntervalos) {
  let max = arrayMax(secuencia);
  let min = arrayMin(secuencia);
  let paso = Math.ceil((max - min) / cantidadIntervalos);
  let intervalos = [{inf: min, sup: min + paso, observedFreq: 0}];

  for (let i = 1; i < cantidadIntervalos; i++) {
    intervalos.push({
      inf: intervalos[intervalos.length - 1].sup,
      sup: intervalos[intervalos.length - 1].sup + paso,
      observedFreq: 0
    });
  }

  return intervalos;
}

function fixIntervals(intervalos) {
  let tempArray = [];
  let done = false;
  while (!done) {
    for (let i = 0; i < intervalos.length; i++) {
      if (intervalos[i].expectedFreq < 5 && i < intervalos.length) {
        let tempInterval = {
          inf: intervalos[i],
          sup: intervalos[i + 1],
          expectedFreq: intervalos[i].expectedFreq + intervalos[i + 1].expectedFreq,
          observedFreq: 0
        }
      }
    }
  }
}

export function getSecuenciaUniformeAB(a, b, cantidad, cantidadIntervalos) {
  let generador = new Generador();
  let result = [];
  let r;
  let temp;

  for (let i = 0; i < cantidad; i++) {
    temp = (generador.getNext() * (b - a));
    r = (Number(a) + temp);
    result.push((Number(toFixed(r, 4))));
  }

  let intervalos = createIntervals(result, cantidadIntervalos);
  setFrequencyUniforme(intervalos, cantidad, cantidadIntervalos);
  setObservedFrequencyAndChi(intervalos, result);
  return {secuencia: result, intervalos: intervalos}
}

export function getSecuenciaPoisson(lambda, cantidad, cantidadIntervalos) {
  let generador = new Generador();
  let result = [];

  function getPoisson() {
    let p = 1;
    let x = -1;
    let a = Math.exp(-lambda);
    let u = generador.getNext();
    p = p * u;
    x = x + 1;
    while (p >= a) {
      u = generador.getNext();
      p = p * u;
      x = x + 1;
    }
    return x
  }

  for (let i = 0; i < cantidad; i++) {
    result.push(Number(toFixed(getPoisson(), 4)));
  }
  let intervalos = createIntervalsPoisson(result, cantidadIntervalos);
  setFrequencyPoisson(intervalos, cantidad, cantidadIntervalos);
  setObservedFrequencyAndChi(intervalos, result);
  return {secuencia: result, intervalos: intervalos}
}


export function getSecuenciaNormalBM(media, desv, cantidad, cantidadIntervalos) {
  let generador = new Generador();
  let result = [];
  for (let i = 0; i < cantidad / 2; i++) {
    let r1 = generador.getNext();
    let r2 = generador.getNext();

    let n1 = (Math.sqrt(-2 * Math.log(r1)) * Math.cos(2 * Math.PI * r2)) * desv + media;
    let n2 = (Math.sqrt(-2 * Math.log(r1)) * Math.sin(2 * Math.PI * r2)) * desv + media;
    result.push(Number(toFixed(n1, 4)), Number(toFixed(n2, 4)));
  }
  let intervalos = createIntervals(result, cantidadIntervalos);
  setFrequencyNormal(intervalos, cantidad, media, desv);
  setObservedFrequencyAndChi(intervalos, result);
  return {secuencia: result, intervalos: intervalos}
}

export function getSecuenciaNormalConvolucion(media, desv, cantidad, cantidadIntervalos) {
  let generador = new Generador();
  let result = [];

  for (let i = 0; i < cantidad; i++) {
    let rnd = 0;
    for (let i = 0; i < 12; i++) {
      rnd += generador.getNext();
    }
    rnd = ((rnd - 6) * desv) + media;
    result.push(Number(toFixed(rnd, 4)));
  }
  let intervalos = createIntervals(result, cantidadIntervalos);
  setFrequencyNormal(intervalos, cantidad, media, desv);
  setObservedFrequencyAndChi(intervalos, result);
  return {secuencia: result, intervalos: intervalos}
}

export function getSecuenciaExpNegativa(media, cantidad, cantidadIntervalos) {
  let generador = new Generador();
  let random;
  let exponencial;
  let lambda = (1 / media);
  let result = [];

  for (let i = 0; i < cantidad; i++) {
    // random = generador.getNext();
    // exponencial = -1 * (1 / lambda) * Math.log(1 - random);
    exponencial = jStat.exponential.sample(lambda);
    result.push(Number(toFixed(exponencial, 4)))
  }
  let intervalos = createIntervals(result, cantidadIntervalos);
  setFrequencyExponencial(intervalos, cantidad, media);
  setObservedFrequencyAndChi(intervalos, result);
  return {secuencia: result, intervalos: intervalos}
}


export function arrayMin(arr) {
  let len = arr.length,
    min = Infinity;
  while (len--) {
    if (Number(arr[len]) < min) {
      min = Number(arr[len]);
    }
  }
  return min;
}

export function arrayMax(arr) {
  let len = arr.length,
    max = -Infinity;
  while (len--) {
    if (Number(arr[len]) > max) {
      max = Number(arr[len]);
    }
  }
  return max;
}

export function toFixed(num, fixed) {
  let re = new RegExp("^-?\\d+(?:.\\d{0," + (fixed || -1) + "})?");
  return num.toString().match(re) ? num.toString().match(re)[0] : num.toString();
}

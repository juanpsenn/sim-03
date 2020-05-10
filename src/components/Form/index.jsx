import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Normal from "./Forms/Normal";
import Poisson from "./Forms/Poisson";
import Uniforme from "./Forms/Uniforme";
import Exponencial from "./Forms/Exponencial";
import TextField from "@material-ui/core/TextField";
import {Paper} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Cantidades from "./Forms/Cantidades";
import {
  getSecuenciaExpNegativa,
  getSecuenciaNormalBM,
  getSecuenciaPoisson,
  getSecuenciaUniformeAB
} from "../../library/distribuciones";

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    "& > *": {
      margin: theme.spacing(1),
    },
    justifyContent: "space-around",
    display: "flex",
  },
  formCotainer: {
    minHeight: 350,
  },
  paperContainer: {padding: theme.spacing(4)},
}));

const metodos = [
  {nombre: "Normal"},
  {nombre: "Poisson"},
  {nombre: "Uniforme"},
  {nombre: "Exponencial"},
];

export default function (props) {
  const classes = useStyles();
  const {setters} = props;
  const [metodo, setMetodo] = React.useState("Normal");

  const [media, setMedia] = React.useState('');
  const [lambda, setLambda] = React.useState('');
  const [convolucion, setConvolucion] = React.useState(false);
  const [desvEst, setDesvEst] = React.useState('');
  const [a, setA] = React.useState('');
  const [b, setB] = React.useState('');
  const [numeros, setNumeros] = React.useState('');
  const [intervalos, setIntervalos] = React.useState('');

  const handleSubmit = (event) => {
    let result;
    event.preventDefault();
    switch (metodo) {
      case "Normal":
        result = getSecuenciaNormalBM(Number(media), Number(desvEst), numeros, intervalos);
        setters.secuencia(result.secuencia);
        setters.intervalos(result.intervalos);
        setters.gl(intervalos - 2 - 1);
        break;
      case "Poisson":
        result = getSecuenciaPoisson(Number(lambda), numeros, intervalos);
        setters.secuencia(result.secuencia);
        setters.intervalos(result.intervalos);
        setters.gl(intervalos - 1 - 1);

        break;
      case "Uniforme":
        result = getSecuenciaUniformeAB(Number(a), Number(b), numeros, intervalos);
        setters.secuencia(result.secuencia);
        setters.intervalos(result.intervalos);
        setters.gl(intervalos - 2 - 1);

        break;
      case "Exponencial":
        result = getSecuenciaExpNegativa(Number(media), numeros, intervalos);
        setters.secuencia(result.secuencia);
        setters.intervalos(result.intervalos);
        setters.gl(intervalos - 1 - 1);

        break;
      default:
        break;
    }
  };

  const handleChange = (event) => {
    setMetodo(event.target.value);
  };

  return (
    <Paper className={classes.paperContainer}>
      <form className={classes.form} onSubmit={(event => handleSubmit(event))} autoComplete="off">
        <TextField
          margin="normal"
          select
          label="Metodo"
          value={metodo}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          fullWidth
          variant="outlined"
        >
          {metodos.map((metodo, index) => (
            <option key={index} value={metodo.nombre}>
              {metodo.nombre}
            </option>
          ))}
        </TextField>

        <div className={classes.formCotainer}>
          {metodo === "Normal" &&
          <Normal setters={{media: setMedia, desvEst: setDesvEst, convolucion: setConvolucion}}
                  values={{media: media, desvEst: desvEst, convolucion: convolucion}}/>}
          {metodo === "Poisson" && <Poisson setters={{lambda: setLambda}} values={{lambda: lambda}}/>}
          {metodo === "Uniforme" && <Uniforme setters={{a: setA, b: setB}} values={{a: a, b: b}}/>}
          {metodo === "Exponencial" && <Exponencial setters={{media: setMedia}} values={{media: media}}/>}
          <Cantidades setters={{numeros: setNumeros, intervalos: setIntervalos}}
                      values={{numeros: numeros, intervalos: intervalos}}/>
        </div>
        <div className={classes.buttonContainer}>
          <Button variant="contained" type="submit" color="primary">
            GENERAR
          </Button>
          <Button variant="contained" onClick={(e) => document.location.reload()} color="primary">
            LIMPIAR
          </Button>
        </div>
      </form>
    </Paper>
  );
}

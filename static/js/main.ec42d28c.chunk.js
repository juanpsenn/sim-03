(this.webpackJsonptpapp=this.webpackJsonptpapp||[]).push([[0],{113:function(e,a,t){e.exports=t(216)},118:function(e,a,t){},119:function(e,a,t){},216:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(7),o=t.n(i),l=(t(118),t(119),t(8)),c=t(249),u=t(269),s=Object(c.a)((function(e){return{}}));var m=function(e){var a=s(),t=e.setters,n=e.values;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{className:a.input,fullWidth:!0,label:"Media",variant:"outlined",margin:"normal",value:n.media,onChange:function(e){return t.media(e.target.value)},required:!0}),r.a.createElement(u.a,{fullWidth:!0,margin:"normal",className:a.input,label:"Desviacion estandar",variant:"outlined",value:n.desvEst,onChange:function(e){return t.desvEst(e.target.value)},required:!0}))},d=Object(c.a)((function(e){return{form:{width:"100%"}}}));var v=function(e){var a=d(),t=e.setters,n=e.values;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{className:a.input,fullWidth:!0,label:"Lambda",variant:"outlined",margin:"normal",value:n.lambda,onChange:function(e){return t.lambda(e.target.value)},required:!0}))},f=Object(c.a)((function(e){return{}}));var b=function(e){var a=f(),t=e.setters,n=e.values;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{className:a.input,fullWidth:!0,label:"A",variant:"outlined",margin:"normal",value:n.a,onChange:function(e){return t.a(e.target.value)},required:!0}),r.a.createElement(u.a,{fullWidth:!0,margin:"normal",className:a.input,label:"Cot. B",variant:"outlined",value:n.b,onChange:function(e){return t.b(e.target.value)},required:!0}))};var g=function(e){var a=e.setters,t=e.values;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{required:!0,label:"Media",variant:"outlined",fullWidth:!0,margin:"normal",value:t.media,onChange:function(e){return a.media(e.target.value)}}))},p=t(255),h=t(256),E=Object(c.a)((function(e){return{}}));var N=function(e){var a=E(),t=e.setters,n=e.values;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{className:a.input,fullWidth:!0,label:"Cantidad de n\xfameros",variant:"outlined",margin:"normal",value:n.numeros,onChange:function(e){return t.numeros(e.target.value)},required:!0}),r.a.createElement(u.a,{fullWidth:!0,margin:"normal",className:a.input,label:"Cantidad de intervalos",variant:"outlined",value:n.intervalos,onChange:function(e){return t.intervalos(e.target.value)},required:!0}))},C=t(95),x=t(96),j=function(){function e(){Object(C.a)(this,e),this.m=4294967296,this.a=1664525,this.c=1013904223,this._last=Date.now()}return Object(x.a)(e,[{key:"getNext",value:function(){return Math.random()}}]),e}(),O=t(74).jStat;function S(e,a){a.forEach((function(a){e.forEach((function(e){a<=e.sup&&a>e.inf&&(e.observedFreq+=1)}))})),e.forEach((function(e){e.chi=Math.pow(e.observedFreq-e.expectedFreq,2)/e.expectedFreq}))}function y(e,a,t,n){e.forEach((function(e){e.expectedFreq=((O.normal.cdf(e.sup,t,n)-O.normal.cdf(e.inf,t,n))*a).toFixed(2)}))}function F(e,a){for(var t=W(e),n=w(e),r=(t-n)/a,i=[{inf:n,sup:n+r,observedFreq:0}],o=1;o<a;o++)i.push({inf:i[i.length-1].sup,sup:i[i.length-1].sup+r,observedFreq:0});return i}function q(e,a,t){var n=new j,r=[];function i(){var a=1,t=-1,r=Math.exp(-e),i=n.getNext();for(a*=i,t+=1;a>=r;)a*=i=n.getNext(),t+=1;return t}for(var o=0;o<a;o++)r.push(Number(P(i(),4)));var l=function(e,a){for(var t=W(e),n=w(e),r=Math.ceil((t-n)/a),i=[{inf:n,sup:n+r,observedFreq:0}],o=1;o<a;o++)i.push({inf:i[i.length-1].sup,sup:i[i.length-1].sup+r,observedFreq:0});return i}(r,t);return function(e,a,t){e.forEach((function(e){e.expectedFreq=((O.poisson.cdf(e.sup,t)-O.poisson.cdf(e.inf,t))*a).toFixed(2)}))}(l,a,t),S(l,r),{secuencia:r,intervalos:l}}function k(e,a,t){new j;for(var n,r=1/e,i=[],o=0;o<a;o++)n=O.exponential.sample(r),i.push(Number(P(n,4)));var l=F(i,t);return function(e,a,t){var n=1/t;e.forEach((function(e){e.expectedFreq=(O.exponential.cdf(e.sup,Number(n))-O.exponential.cdf(e.inf,Number(n)))*Number(a)}))}(l,a,e),S(l,i),{secuencia:i,intervalos:l}}function w(e){for(var a=e.length,t=1/0;a--;)Number(e[a])<t&&(t=Number(e[a]));return t}function W(e){for(var a=e.length,t=-1/0;a--;)Number(e[a])>t&&(t=Number(e[a]));return t}function P(e,a){var t=new RegExp("^-?\\d+(?:.\\d{0,"+(a||-1)+"})?");return e.toString().match(t)?e.toString().match(t)[0]:e.toString()}var M=Object(c.a)((function(e){return{buttonContainer:{"& > *":{margin:e.spacing(1)},justifyContent:"space-around",display:"flex"},formCotainer:{minHeight:350},paperContainer:{padding:e.spacing(4)}}})),R=[{nombre:"Normal"},{nombre:"Poisson"},{nombre:"Uniforme"},{nombre:"Exponencial"}],I=function(e){var a=M(),t=e.setters,n=r.a.useState("Normal"),i=Object(l.a)(n,2),o=i[0],c=i[1],s=r.a.useState(""),d=Object(l.a)(s,2),f=d[0],E=d[1],C=r.a.useState(""),x=Object(l.a)(C,2),O=x[0],w=x[1],W=r.a.useState(!1),I=Object(l.a)(W,2),B=I[0],A=I[1],H=r.a.useState(""),L=Object(l.a)(H,2),D=L[0],V=L[1],U=r.a.useState(""),G=Object(l.a)(U,2),J=G[0],T=G[1],z=r.a.useState(""),$=Object(l.a)(z,2),_=$[0],K=$[1],Q=r.a.useState(""),X=Object(l.a)(Q,2),Y=X[0],Z=X[1],ee=r.a.useState(""),ae=Object(l.a)(ee,2),te=ae[0],ne=ae[1],re=function(e){var a;switch(e.preventDefault(),o){case"Normal":a=function(e,a,t,n){for(var r=new j,i=[],o=0;o<t/2;o++){var l=r.getNext(),c=r.getNext(),u=Math.sqrt(-2*Math.log(l))*Math.cos(2*Math.PI*c)*a+e,s=Math.sqrt(-2*Math.log(l))*Math.sin(2*Math.PI*c)*a+e;i.push(Number(P(u,4)),Number(P(s,4)))}var m=F(i,n);return y(m,t,e,a),S(m,i),{secuencia:i,intervalos:m}}(Number(f),Number(D),Y,te),t.secuencia(a.secuencia),t.intervalos(a.intervalos),t.gl(te-2-1);break;case"Poisson":a=q(Number(O),Y,te),t.secuencia(a.secuencia),t.intervalos(a.intervalos),t.gl(te-1-1);break;case"Uniforme":a=function(e,a,t,n){for(var r,i,o=new j,l=[],c=0;c<t;c++)i=o.getNext()*(a-e),r=Number(e)+i,l.push(Number(P(r,4)));var u=F(l,n);return function(e,a,t){e.forEach((function(e){(e.expectedFreq=a/t).toFixed(2)}))}(u,t,n),S(u,l),{secuencia:l,intervalos:u}}(Number(J),Number(_),Y,te),t.secuencia(a.secuencia),t.intervalos(a.intervalos),t.gl(te-2-1);break;case"Exponencial":a=k(Number(f),Y,te),t.secuencia(a.secuencia),t.intervalos(a.intervalos),t.gl(te-1-1)}};return r.a.createElement(p.a,{className:a.paperContainer},r.a.createElement("form",{className:a.form,onSubmit:function(e){return re(e)},autoComplete:"off"},r.a.createElement(u.a,{margin:"normal",select:!0,label:"Metodo",value:o,onChange:function(e){c(e.target.value)},SelectProps:{native:!0},fullWidth:!0,variant:"outlined"},R.map((function(e,a){return r.a.createElement("option",{key:a,value:e.nombre},e.nombre)}))),r.a.createElement("div",{className:a.formCotainer},"Normal"===o&&r.a.createElement(m,{setters:{media:E,desvEst:V,convolucion:A},values:{media:f,desvEst:D,convolucion:B}}),"Poisson"===o&&r.a.createElement(v,{setters:{lambda:w},values:{lambda:O}}),"Uniforme"===o&&r.a.createElement(b,{setters:{a:T,b:K},values:{a:J,b:_}}),"Exponencial"===o&&r.a.createElement(g,{setters:{media:E},values:{media:f}}),r.a.createElement(N,{setters:{numeros:Z,intervalos:ne},values:{numeros:Y,intervalos:te}})),r.a.createElement("div",{className:a.buttonContainer},r.a.createElement(h.a,{variant:"contained",type:"submit",color:"primary"},"GENERAR"),r.a.createElement(h.a,{variant:"contained",onClick:function(e){return document.location.reload()},color:"primary"},"LIMPIAR"))))},B=t(265),A=t(263),H=t(264),L=t(258),D=t(262),V=t(261),U=t(257),G=t(259),J=t(268),T=t(260),z=[{id:"intervalo",label:"Intervalos",minWidth:75},{id:"esperada",label:"Frec. esperada",minWidth:50},{id:"observada",label:"Frec. observada",minWidth:50},{id:"chi",label:"Chi cuadrado",minWidth:50}],$=Object(c.a)({root:{width:"100%"},container:{maxHeight:440}});var _=function(e){var a=$(),n=t(75),i=e.intervalos.map((function(e){return{intervalo:"[".concat(P(e.inf,4)," ; ").concat(P(e.sup,4),"]"),esperada:e.expectedFreq,observada:e.observedFreq,chi:n(e.chi)?P(e.chi,4):"---"}})),o=r.a.useState(0),c=Object(l.a)(o,2),u=c[0],s=c[1],m=r.a.useState(7),d=Object(l.a)(m,2),v=d[0],f=d[1];return r.a.createElement(p.a,{className:a.root},r.a.createElement(U.a,{className:a.container},r.a.createElement(L.a,{stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(G.a,null,r.a.createElement(T.a,null,z.map((function(e){return r.a.createElement(V.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),r.a.createElement(D.a,null,i.slice(u*v,u*v+v).map((function(e){return r.a.createElement(T.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.code},z.map((function(a){var t=e[a.id];return r.a.createElement(V.a,{key:a.id,align:a.align},a.format&&"number"===typeof t?a.format(t):t)})))}))))),r.a.createElement(J.a,{rowsPerPageOptions:[7,10,15],component:"div",count:i.length,rowsPerPage:v,page:u,onChangePage:function(e,a){s(a)},onChangeRowsPerPage:function(e){f(+e.target.value),s(0)}}))},K=[{id:"numero",label:"#",minWidth:50},{id:"value",label:"Valor",minWidth:100}],Q=Object(c.a)({root:{width:"100%"},container:{maxHeight:440}});var X=function(e){var a=0,t=Q(),n=e.secuencia.map((function(e){return{numero:a+=1,value:e}})),i=r.a.useState(0),o=Object(l.a)(i,2),c=o[0],u=o[1],s=r.a.useState(7),m=Object(l.a)(s,2),d=m[0],v=m[1];return r.a.createElement(p.a,{className:t.root},r.a.createElement(U.a,{className:t.container},r.a.createElement(L.a,{stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(G.a,null,r.a.createElement(T.a,null,K.map((function(e){return r.a.createElement(V.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),r.a.createElement(D.a,null,n.slice(c*d,c*d+d).map((function(e){return r.a.createElement(T.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.code},K.map((function(a){var t=e[a.id];return r.a.createElement(V.a,{key:a.id,align:a.align},a.format&&"number"===typeof t?a.format(t):t)})))}))))),r.a.createElement(J.a,{rowsPerPageOptions:[7,10,15],component:"div",count:n.length,rowsPerPage:d,page:c,onChangePage:function(e,a){u(a)},onChangeRowsPerPage:function(e){v(+e.target.value),u(0)}}))},Y=Object(c.a)((function(e){return{title:{flex:"1 1 100%"},root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)}}})),Z=function(e){var a=e.values,t=a.secuencia,n=a.intervalos,i=Y();return r.a.createElement(B.a,{container:!0,spacing:1},r.a.createElement(B.a,{item:!0,xs:12,lg:5},r.a.createElement(p.a,null,r.a.createElement(A.a,{className:i.root},r.a.createElement(H.a,{className:i.title,variant:"h6",id:"tableTitle",component:"div"},"Valores")),r.a.createElement(X,{secuencia:t}))),r.a.createElement(B.a,{item:!0,xs:12,lg:7},r.a.createElement(p.a,null,r.a.createElement(A.a,{className:i.root},r.a.createElement(H.a,{className:i.title,variant:"h6",id:"tableTitle",component:"div"},"Frecuencias")),r.a.createElement(_,{intervalos:n}))))},ee=Object(c.a)((function(e){return{buttonContainer:{display:"flex",justifyContent:"center"},paperContainer:{padding:e.spacing(4)}}})),ae=function(e){var a=t(74).jStat,n=e.intervalos,i=e.gradosLibertad,o=r.a.useState(""),c=Object(l.a)(o,2),s=c[0],m=c[1],d=r.a.useState(""),v=Object(l.a)(d,2),f=v[0],b=v[1],g=r.a.useState(""),E=Object(l.a)(g,2),N=E[0],C=E[1],x=r.a.useState(""),j=Object(l.a)(x,2),O=j[0],S=j[1],y=function(e){e.preventDefault();var r=function(e){var a=t(75),n=0;return e.forEach((function(e){a(e.chi)&&(n+=e.chi)})),n}(n),o=a.chisquare.inv(1-s,i);b(r),C(o),S(r<o?"Se acepta":"No se acepta")},F=ee();return r.a.createElement(p.a,{className:F.paperContainer},r.a.createElement("form",{className:F.form,onSubmit:function(e){return y(e)},autoComplete:"off"},r.a.createElement(u.a,{required:!0,label:"Nivel de confianza",variant:"outlined",fullWidth:!0,value:s,onChange:function(e){return m(e.target.value)},margin:"normal"}),r.a.createElement(u.a,{label:"Sumatoria Chi",variant:"outlined",fullWidth:!0,disabled:!0,value:f,margin:"normal"}),r.a.createElement(u.a,{label:"Valor tabla Chi",disabled:!0,variant:"outlined",fullWidth:!0,value:N,margin:"normal"}),r.a.createElement(u.a,{disabled:!0,label:"Resultado",variant:"outlined",fullWidth:!0,value:O,margin:"normal"}),r.a.createElement("div",{className:F.buttonContainer},r.a.createElement(h.a,{variant:"contained",type:"submit",color:"primary"},"VERIFICAR"))))},te=t(97);function ne(e){var a=e.intervalos,t={labels:a.map((function(e){return"[".concat(P(e.inf,4)," ; ").concat(P(e.sup,4),"]")})),datasets:[{label:"FE",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:a.map((function(e){return e.expectedFreq}))},{label:"FO",backgroundColor:"rgba(125,9,32,0.8)",borderColor:"rgba(255,99,32,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,12,0.4)",hoverBorderColor:"rgba(235,99,12,1)",data:a.map((function(e){return e.observedFreq}))}]};return r.a.createElement(p.a,{style:{margin:10,padding:10}},r.a.createElement("div",{style:{height:345}},r.a.createElement(te.a,{data:t,width:100,height:50,options:{maintainAspectRatio:!1}})))}var re=Object(c.a)((function(e){return{root:{flexGrow:1,backgroundColor:"lightgrey"},metodos:{padding:e.spacing(1)},tablas:{padding:e.spacing(1)}}}));var ie=function(){var e=re(),a=r.a.useState([]),t=Object(l.a)(a,2),n=t[0],i=t[1],o=r.a.useState([]),c=Object(l.a)(o,2),u=c[0],s=c[1],m=r.a.useState(0),d=Object(l.a)(m,2),v=d[0],f=d[1];return r.a.createElement(B.a,{container:!0,className:e.root},r.a.createElement(B.a,{item:!0,xs:12,lg:3,className:e.metodos},r.a.createElement(I,{setters:{secuencia:i,intervalos:s,gl:f}})),r.a.createElement(B.a,{item:!0,xs:12,lg:9,spacing:1,className:e.tablas},r.a.createElement(B.a,{container:!0,spacing:1},r.a.createElement(B.a,{item:!0,xs:12,lg:9},r.a.createElement(Z,{values:{secuencia:n,intervalos:u}})),r.a.createElement(B.a,{item:!0,xs:12,lg:3},r.a.createElement(ae,{gradosLibertad:v,intervalos:u})))),r.a.createElement(B.a,{item:!0,xs:12},r.a.createElement(ne,{intervalos:u})))},oe=t(100),le=t(266),ce=t(99),ue=Object(oe.a)({},ce.esES);var se=function(){return r.a.createElement(le.a,{theme:ue},r.a.createElement(ie,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[113,1,2]]]);
//# sourceMappingURL=main.ec42d28c.chunk.js.map
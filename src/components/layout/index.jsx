import React from "react";
import Form from "./../Form";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Tables from "./../Tables";
import Resultado from "../Resultado";
import Grafico from "../Grafico";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "lightgrey",
  },
  metodos: {
    padding: theme.spacing(1),
  },
  tablas: {
    padding: theme.spacing(1),
  },
}));

function Layout() {
  const classes = useStyles();
  const [secuencia, setSecuencia] = React.useState([]);
  const [intervalos, setIntervalos] = React.useState([]);
  const [gradosLibertad, setGradosLibertad] = React.useState(0);
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} lg={3} className={classes.metodos}>
        <Form setters={{secuencia: setSecuencia, intervalos: setIntervalos, gl: setGradosLibertad}}/>
      </Grid>
      <Grid item xs={12} lg={9} spacing={1} className={classes.tablas}>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={9}>
            <Tables values={{secuencia: secuencia, intervalos: intervalos}}/>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Resultado gradosLibertad={gradosLibertad} intervalos={intervalos}/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grafico intervalos={intervalos}/>
      </Grid>
    </Grid>
  );
}

export default Layout;

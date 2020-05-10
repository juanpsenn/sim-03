import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Paper, Typography, Toolbar} from "@material-ui/core";
import Frecuencias from "./Tables/Frecuencias";
import Valores from "./Tables/Valores";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: "1 1 100%",
  },
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
}));

export default function (props) {
  const {secuencia, intervalos} = props.values;
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} lg={5}>
        <Paper>
          <Toolbar className={classes.root}>
            <Typography
              className={classes.title}
              variant="h6"
              id="tableTitle"
              component="div"
            >
              Valores
            </Typography>
          </Toolbar>
          <Valores secuencia={secuencia}/>
        </Paper>
      </Grid>
      <Grid item xs={12} lg={7}>
        <Paper>
          <Toolbar className={classes.root}>
            <Typography
              className={classes.title}
              variant="h6"
              id="tableTitle"
              component="div"
            >
              Frecuencias
            </Typography>
          </Toolbar>
          <Frecuencias intervalos={intervalos}/>
        </Paper>
      </Grid>
    </Grid>
  );
}

import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({}));

function Cantidades(props) {
  const classes = useStyles();
  const {setters, values} = props;
  return (
    <React.Fragment>
      <TextField
        className={classes.input}
        fullWidth
        label="Cantidad de números"
        variant="outlined"
        margin="normal"
        value={values.numeros}
        onChange={(e) => setters.numeros(e.target.value)}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        className={classes.input}
        label="Cantidad de intervalos"
        variant="outlined"
        value={values.intervalos}
        onChange={(e) => setters.intervalos(e.target.value)}

        required
      />
    </React.Fragment>
  );
}

export default Cantidades;

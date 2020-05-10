import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {Checkbox} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({}));

function Normal(props) {
  const classes = useStyles();
  const {setters, values} = props;
  return (
    <React.Fragment>
      <TextField
        className={classes.input}
        fullWidth
        label="Media"
        variant="outlined"
        margin="normal"
        value={values.media}
        onChange={(e) => setters.media(e.target.value)}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        className={classes.input}
        label="Desviacion estandar"
        variant="outlined"
        value={values.desvEst}
        onChange={(e) => setters.desvEst(e.target.value)}
        required
      />
    </React.Fragment>
  );
}

export default Normal;

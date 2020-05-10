import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({}));

function Uniforme(props) {
  const classes = useStyles();
  const {setters, values} = props;
  return (
    <React.Fragment>
      <TextField
        className={classes.input}
        fullWidth
        label="A"
        variant="outlined"
        margin="normal"
        value={values.a}
        onChange={(e) => setters.a(e.target.value)}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        className={classes.input}
        label="Cot. B"
        variant="outlined"
        value={values.b}
        onChange={(e) => setters.b(e.target.value)}
        required
      />
    </React.Fragment>
  );
}

export default Uniforme;

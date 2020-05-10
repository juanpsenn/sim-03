import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
  },
}));

function Poisson(props) {
  const classes = useStyles();
  const {setters, values} = props;
  return (
    <React.Fragment>
      <TextField
        className={classes.input}
        fullWidth
        label="Lambda"
        variant="outlined"
        margin="normal"
        value={values.lambda}
        onChange={(e) => setters.lambda(e.target.value)}
        required
      />
    </React.Fragment>
  );
}

export default Poisson;

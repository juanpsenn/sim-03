import React from "react";
import TextField from "@material-ui/core/TextField";


function Exponencial(props) {
  const {setters, values} = props;
  return (
    <React.Fragment>
      <TextField
        required
        label="Media"
        variant="outlined"
        fullWidth
        margin="normal"
        value={values.media}
        onChange={(e) => setters.media(e.target.value)}
      />
    </React.Fragment>
  );
}

export default Exponencial;

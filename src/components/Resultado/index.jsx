import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {Button, Paper} from "@material-ui/core";
import {getSumChi} from "../../library/distribuciones";

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  paperContainer: {padding: theme.spacing(4)},
}));

export default function (props) {
  const {jStat} = require('jstat');

  const {intervalos, gradosLibertad} = props;
  const [nivelConfianza, setNivelConfianza] = React.useState('');
  const [sumatoriaChi, setSumatoriaChi] = React.useState('');
  const [valorTabla, setValorTabla] = React.useState('');
  const [resultado, setResultado] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let sum = getSumChi(intervalos);
    let tabla = jStat.chisquare.inv(1 - nivelConfianza, gradosLibertad);
    setSumatoriaChi(sum);
    setValorTabla(tabla);

    if (sum < tabla) {
      setResultado('Se acepta')
    } else {
      setResultado('No se acepta')
    }
  };

  const classes = useStyles();
  return (
    <Paper className={classes.paperContainer}>
      <form className={classes.form} onSubmit={(event => handleSubmit(event))} autoComplete="off">
        <TextField
          required
          label="Nivel de confianza"
          variant="outlined"
          fullWidth
          value={nivelConfianza}
          onChange={(event => setNivelConfianza(event.target.value))}
          margin="normal"
        />
        <TextField
          label="Sumatoria Chi"
          variant="outlined"
          fullWidth
          disabled={true}
          value={sumatoriaChi}
          margin="normal"
        />
        <TextField
          label="Valor tabla Chi"
          disabled={true}
          variant="outlined"
          fullWidth
          value={valorTabla}
          margin="normal"
        />
        <TextField
          disabled={true}
          label="Resultado"
          variant="outlined"
          fullWidth
          value={resultado}
          margin="normal"
        />

        <div className={classes.buttonContainer}>
          <Button variant="contained" type="submit" color="primary">
            VERIFICAR
          </Button>
        </div>
      </form>
    </Paper>
  );
}

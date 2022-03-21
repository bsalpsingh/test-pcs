import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  grid: {
    marginTop: 20,
    marginBottom: 20,
    // justifyContent: "felx-end",
  },

  select: {
    display: "flex",
    justifyContent: "center",
  },
  table: {
    display: "inline",
   
  },
}));

export default useStyles;

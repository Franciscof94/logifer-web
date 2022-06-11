import { makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel/Carousel";

const Marks = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.mark}>
        TRABAJAMOS CON EL RESPALDO
        <br />
        <span>DE LAS MEJORES MARCAS.</span>
      </Typography>
      <Carousel />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  mark: {
    fontWeight: 300,
    fontSize: "2rem",
    lineHeight: "1.3",
    "& > *": {
      color: "#8F8F8F",
    },
  },
  [theme.breakpoints.down(768)]: {
    mark: {
      fontSize: "1.5rem",
    },
  },
}));

export default Marks;

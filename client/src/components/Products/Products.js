import data from "../../data/data";
import { makeStyles, Typography } from "@material-ui/core";

const Products = () => {
  const classes = useStyles();

  
  return (
    <div className={classes.root}>
      <Typography variant="h3">ENCONTRÁ LO QUE BUSCÁS</Typography>
      <div>
        <div className={classes.container}>
          <div className={classes.row}>
            {data.slice(0, 2).map((row, i) => (
              <div key={i}>
                <img
                  src={row.img}
                  alt={row.category}
                  className={classes[row.c]}
                />
                <span className={classes[row.classSpan]}>{row.category}</span>
              </div>
            ))}
          </div>
          <div className={classes.row}>
            {data.slice(2, 4).map((row, i) => (
              <div key={i}>
                <img
                  src={row.img}
                  alt={row.category}
                  className={classes[row.c]}
                />
                <span className={classes[row.classSpan]}>{row.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "5rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& h3": {
      fontSize: "2rem",
      fontWeight: "300",
      marginBottom: "25px",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    margin: "15px",
  },
  row: {
    display: "flex",
    position: "relative",
    "& span": {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "white",
    },
    "& img": {
      height: "176px",
      width: "600px",
      objectFit: "cover",
      margin: "7px",
      position: "relative",
      maxWidth: "100%",
      opacity: "0.9",
    },
  },
  hierros: {
    borderTopRightRadius: "175px",
  },
  caños: {
    borderBottomRightRadius: "175px",
  },
  ladrillos: {
    borderBottomLeftRadius: "175px",
  },
  spanCemento: {
    position: "absolute",
    top: "66px",
    left: "20%",
  },
  spanHierros: {
    position: "absolute",
    top: "66px",
    right: "20%",
  },
  spanLadrillos: {
    position: "absolute",
    top: "66px",
    left: "19%",
  },
  spanCaños: {
    position: "absolute",
    top: "66px",
    right: "21%",
  },
  [theme.breakpoints.down(768)]: {
    root: {
      "& h3": {
        fontSize: "1.5rem",
      },
    },
    row: {
      "& div": {
        padding: "0 5px",
      },
      "&, span": {
        fontSize: "1.4rem",
      },
      "& img": {
        height: "75px",
        margin: "0",
      },
    },
    spanCemento: {
      top: "25px",
      left: "16%",
    },
    spanHierros: {
      top: "25px",
    },
    spanLadrillos: {
      top: "25px",
      left: "14%",
    },
    spanCaños: {
      top: "25px",
    },
  },
}));

export default Products;

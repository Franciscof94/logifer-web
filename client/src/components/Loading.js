import { Container, makeStyles } from "@material-ui/core";
import React from "react";

const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.loading}></div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "calc(100vh - (5.31rem + 20rem))",
  },
  loading: {
    width: "4rem",
    height: "4rem",
    borderRadius: "50%",
    border: "4px solid #ccc",
    borderTopColor: "#3342b1",
    animation: "$spinner 0.6s linear infinite",
  },
  "@keyframes spinner": {
    to: {
      transform: "rotate(360deg)",
    },
  },
}));

export default Loading;

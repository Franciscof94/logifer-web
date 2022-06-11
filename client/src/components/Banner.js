import { makeStyles } from "@material-ui/core";
import bannerImage from "../images/Banner.jpg";
import { FiPhoneCall } from "react-icons/fi";
import Trapezoid from "../images/trapezoid.svg";
import Loading from "./Loading";

const Banner = ({ isActive }) => {
  const classes = useStyles();

  return (
    <div>
      {isActive ? (
        <div className={classes.loaderContainer}>
          <Loading />
        </div>
      ) : (
        <div className={classes.root}>
          <img src={bannerImage} alt="Banner" className={classes.image} />
          <div className={classes.phoneContainer}>
            <img src={Trapezoid} alt="Trapezoid" />
            <div>
              <FiPhoneCall fontSize={23} />
              <span>02245-442493</span>
            </div>
          </div>
          <div className={classes.fadeBottom}></div>
          <div className={classes.titleContainer}>
            <div className={classes.lineUp}></div>
            <div className={classes.title}>
              Materiales <span>de</span> construcción
            </div>
            <div className={classes.lineDown}></div>
          </div>
        </div>
      )}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "100%",
  },
  titleContainer: {
    position: "absolute",
    top: "40%",
    zIndex: "100",
    fontFamily: "'Allerta Stencil', sans-serif",
    "& span": {
      color: "#8F8F8F",
    },
  },
  title: {
    color: "white",
    fontSize: "4rem",
  },
  lineUp: {
    height: "6px",
    right: "5px",
    position: "absolute",
    width: "15vw",
    backgroundColor: "#8F8F8F",
  },
  lineDown: {
    height: "6px",
    width: "15vw",
    backgroundColor: "#8F8F8F",
  },
  loaderContainer: {
    height: "50vh",
  },
  MyLoader_spinner: {
    position: "absolute",
    left: "50%",
    top: "30%",
  },
  fadeBottom: {
    position: "absolute",
    top: "3vh",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    backgroundImage:
      "linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111)",
  },
  phoneContainer: {
    position: "fixed",
    left: "39.6%",
    zIndex: "101",
    "& img": {
      position: "relative",
    },
    "& div": {
      position: "absolute",
      top: "5px",
      left: "3vh",
      fontSize: "1.9rem",
      color: "#3b3840",
      fontWeight: "bold",
    },
  },
  [theme.breakpoints.down(768)]: {
    title: {
      fontSize: "1.6rem",
    },
    lineDown: {
      height: "3px",
      width: "15vh",
    },
    lineUp: {
      height: "3px",
      width: "15vh",
    },
    phoneContainer: {
      display: "none",
    },
    MyLoader_spinner: {
      left: '35%'
    }
  },
}));

export default Banner;

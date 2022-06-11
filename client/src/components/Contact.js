import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.contact}>
      <Typography variant='h3' className={classes.contactTitle}>CONTACTO</Typography>
      <div className={classes.phone}>
        <FiPhoneCall fontSize={25} />
        <div>
          <span>02245-442493</span>
          <span>02245-476833</span>
        </div>
      </div>
      <div className={classes.email}>
        <MdOutlineEmail fontSize={25} />
        <span>
          <a href="mailto:ferraromateriales@yahoo.com">
            ferraromateriales@yahoo.com
          </a>
        </span>
      </div>
      <div className={classes.location}>
        <GoLocation fontSize={25} />
        <span>Mitre 1775 Dolores (7100) - Prov. Buenos Aires</span>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  contact: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    zIndex: 100,
  },
  contactTitle: {
    margin: "3px 0",
    color: 'white',
    fontSize: '2.4rem'
  },
  phone: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& div": {
      marginLeft: "10px",
    },
    "& > *": {
      display: "flex",
      flexDirection: "column",
    },
  },
  email: {
    margin: "15px 0",
    display: "flex",
    alignItems: "center",
    "& span": {
      marginLeft: "10px",
    },
    "& a": {
      color: "white",
      textDecoration: "none",
    },
  },
  location: {
    display: "flex",
    alignItems: "center",
    "& span": {

    },
  },
  [theme.breakpoints.down(768)]: {
    contactTitle: {
      fontSize: '1.5rem'
    },
    phone: {
      fontSize: '0.9rem'
    },
    email: {
      fontSize: '0.9rem'
    },
    location: {
      fontSize: '0.9rem'
    }
  }
}));

export default Contact;

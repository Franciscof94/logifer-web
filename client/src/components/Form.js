import {
  Button,
  Container,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import Contact from "./Contact";
import { useForm } from "./Hooks/useForm";
import Bolsones from "../images/bolson.jpg";
import FormModal from "./Modal.js";
import { Helmet, HelmetProvider } from "react-helmet-async";


const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexMessage = /^.{1,255}$/;

  if (!form.name) {
    errors.name = "El campo 'Nombre y apellido' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre y apellido' solo acepta letras";
  }

  if (!form.email) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (!form.subject) {
    errors.subject = "El campo 'Asunto' es requerido";
  }

  if (!form.message) {
    errors.message = "El campo 'Mensaje' es requerido";
  } else if (!regexMessage.test(form.message.trim())) {
    errors.message = "El campo 'Mensaje' no debe exceder los 255 caracteres";
  }

  return errors;
};

const Form = () => {
  const classes = useStyles();

  const { form, errors, response, setResponse, handleChange, handleSubmit } =
    useForm(initialForm, validationsForm);

  const isEnabled =
    form.name.length > 0 &&
    form.email.length > 0 &&
    form.subject.length > 0 &&
    form.message.length > 0;

  const e = Object.keys(errors).length;

  return (
    <HelmetProvider>
    <div className={classes.main}>
      <Helmet>
        <title>Contacto - Ferraro Materiales</title>
        <meta
          name="description"
          content="Venta de materiales para la construcción en la ciudad de Dolores - Pcia de Buenos Aires. Visita ahora nuestra web!"
        />
      </Helmet>
      <Typography className={classes.title} variant="h3">
        DEJANOS TU MENSAJE
      </Typography>
      <Paper
        elevation={5}
        sx={{
          margin: "auto",
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
        className={classes.paper}
      >
        <Container className={classes.root}>
          <div className={classes.formContainer}>
            <form onSubmit={handleSubmit}>
              <div>
                <label className={classes.label}>Nombre y apellido</label>
                <TextField
                  fullWidth
                  id="name"
                  variant="outlined"
                  type="text"
                  error={form.name.length > 0 && errors.name}
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className={classes.label}>Email</label>
                <TextField
                  fullWidth
                  id="email"
                  variant="outlined"
                  error={form.email.length > 0 && errors.email}
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className={classes.label}>Asunto</label>
                <TextField
                  fullWidth
                  id="subject"
                  error={form.subject.length > 0 && errors.subject}
                  variant="outlined"
                  type="text"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className={classes.label}>Mensaje</label>
                <TextField
                  fullWidth
                  id="filled-multiline-static"
                  error={form.message.length > 0 && errors.message}
                  multiline
                  minRows="4"
                  variant="outlined"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <Button
                disabled={!isEnabled}
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                color="primary"
              >
                Enviar
              </Button>
            </form>
          </div>
          <div className={classes.imgContainer}>
            <div className={classes.container}>
              <div className={classes.contact}>
                <Contact />
              </div>
              <div className={classes.fadeBottom}></div>
            </div>
          </div>
        </Container>
        {response && <FormModal setResponse={setResponse} />}
      </Paper>
    </div>
    </HelmetProvider>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    margin: "63px 0 0 0",
    fontSize: "2rem",
    fontWeight: "100",
  },
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "none",
      gridTemplateRows: "1fr 1fr",
    },
  },
  formContainer: {
    margin: "1rem",
    "& div": {
      margin: "0.3rem 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
    },
  },
  label : {
    fontSize: "1.1rem",
        fontWeight: "bold",
  },
  imgContainer: {
    margin: "1rem",
    position: "relative",
  },
  paper: {
    maxWidth: "1100px",
    margin: "3rem auto",
  },
  message: {
    minHeight: "120px",
  },
  container: {
    backgroundImage: `url(${Bolsones})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  contact: {
    zIndex: 100,
    color: "white",
  },
  contactContainer: {
    position: "absolute",
    top: "22%",
    left: "14%",
    color: "white",
    zIndex: 155,
  },
  imageContainer: {
    position: "relative",
    "& img": {
      width: "560px",
    },
  },
  error: {
    margin: "0",
    color: "#F44336",
    fontWeight: "bold",
  },
  fadeBottom: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    backgroundImage:
      "linear-gradient(180deg, #000000a6, rgb(18 16 16 / 81%), #111111bf)",
  },
  [theme.breakpoints.down("sm")]: {
    paper: {
      padding: "0",
      margin: " 3rem 1.5rem",
    },
    contactContainer: {
      top: "9%",
      left: "9%",
      fontSize: "0.9rem",
    },
    imageContainer: {
      "& img": {
        width: "100%",
      },
    },
  },
}));

export default Form;

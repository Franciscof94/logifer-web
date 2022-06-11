import { Backdrop, Box, Button, Fade, makeStyles, Modal, Typography } from '@material-ui/core';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa'

const style = {
  position: 'absolute',
  top: '40%',
  left: '32%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 8,
} 

const FormModal = ({ setResponse }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={classes.modal}>
          <div>
          <div>
            <FaCheckCircle fontSize={75} color='#2D43E3'/>
          </div>
          <Typography id="transition-modal-title" variant="h5" component="h2">
              Hemos recibido su mensaje
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Nos pondremos en contacto con usted a la brevedad.
            </Typography>
          </div>
          <div>
          <div></div>
            <Button onClick={() => setResponse(false)} variant='contained' color='primary' >Aceptar</Button>
          </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400',
    backgroundColor: 'white',
    boxShadow: '24',
    "& div:first-child":{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '15px'
    },
    "& div:last-child": {
      backgroundColor: '#a9a8a8',
      display: 'flex',
      position: 'relative',
      justifyContent: 'center',
      "& button": {
        margin: '35px 0'
      },
      "& div": {
        height: '4px',
        width: '4px',
        position: 'absolute',
        bottom: '87.9px',
        transform:  'rotate(45deg)',
        backgroundColor: 'white'
      }
    }
  }
}))

export default FormModal
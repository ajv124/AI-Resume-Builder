import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaEdit } from "react-icons/fa";
import { FormControl, InputLabel, MenuItem, Select, Step, StepLabel, Stepper, TextField } from '@mui/material';
import { FaXmark } from 'react-icons/fa6';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight:'80vh',
  overflow:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Edit() {

const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

  return (
    <div>
      <Button style={{color:'#393a36'}} className='btn mx-2' onClick={handleOpen}><FaEdit className='fs-3'/>Edit CV</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <h3>Personal Details</h3>
              <div className="p-3 row">
                <TextField id="standard-basic-name" label="Full Name" variant="standard" />
                <TextField id="standard-basic-loc" label="Location" variant="standard" />
                <FormControl variant='standard'>
                  <InputLabel id="demo-simple-select-label">Choose Job Title</InputLabel>
                  <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Job">
                    <MenuItem value={'Job'}>Job</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div>
              <h3>Contact Details</h3>
              <div className="p-3 row">
                <TextField id="standard-basic-email" label="Email" variant="standard" />
                <TextField id="standard-basic-no" label="Contact No" variant="standard" />
                <TextField id="standard-basic-linkedin" label="Linkedin Link" variant="standard" />
                <TextField id="standard-basic-git" label="Github" variant="standard" />
              </div>
            </div>
            <div>
              <h3>Educational Details</h3>
              <div className="p-3 row">
                <TextField id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />
                <TextField id="standard-basic-college" label="College/University Name" variant="standard" />
                <TextField id="standard-basic-grad" label="Year of Graduation" variant="standard" />
              </div>
            </div>
            <div>
              <h3>Skills</h3>
              <div className="d-flex p-3">
                <input type="text" placeholder='Add New Skill' className='form-control'/>
                <Button>add</Button>
              </div>
              <h6>Added Skills : </h6>
              <div className="p-3 d-flex justify-content-between flex-wrap">
                <Button variant='contained' sx={{backgroundColor:'#393a36'}}>skill <FaXmark className='ms-2'/> </Button>
              </div>
            </div>
            <div>
              <h3>Summary</h3>
              <div className="p-3 row">
                <TextField id='summary' label='Summary' multiline variant='standard' ></TextField>
              </div>
            </div>
            <button className='btn text-light mt-3' style={{backgroundColor:'#393a36'}}>UPDATE CV</button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit
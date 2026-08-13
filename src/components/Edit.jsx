import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaEdit } from "react-icons/fa";
import { FormControl, InputLabel, MenuItem, Select, Step, StepLabel, Stepper, TextField } from '@mui/material';
import { FaXmark } from 'react-icons/fa6';
import jobRole from '../assets/jobRole.json'
import { toast } from 'react-toastify';
import { useRef } from 'react';
import { editResumeAPI } from '../services/apiService';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: '80vh',
  overflow: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Edit({ resumeDetails, setResumeDetails }) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const skillRef = useRef()

  const removeSkill = (skill) => {
    setResumeDetails({ ...resumeDetails, skills: resumeDetails.skills.filter(item => item != skill) })
  }

  const addSkill = (skill) => {
    if (skill) {
      if (resumeDetails?.skills?.map(item => item.toLowerCase()).includes(skill.toLowerCase())) {
        toast.warning("Given skill already exists... Please add another!!!")
      } else {
        setResumeDetails({ ...resumeDetails, skills: [...resumeDetails?.skills, skill] })
      }
      skillRef.current.value = ""
    } else {
      toast.info("Input valid skill!!!")
    }
  }

  const handleUpdateResume = async () => {
    const { fullName, location, job, email, phone, github, linked, degree, college, year, skills, summary } = resumeDetails
    if (fullName && location && job && email && phone && github && linked && degree && college && year && skills.length > 0 && summary) {
      const response = await editResumeAPI(resumeDetails.id,resumeDetails)
      if (response.status == 200) {
        toast.success("Resume updated successfully!!!")
        handleClose()
      }
    } else {
      toast.info("Please fill the form completely!!!")
    }
  }

  return (
    <div>
      <Button style={{ color: '#393a36' }} className='btn mx-2' onClick={handleOpen}><FaEdit className='fs-3' />Edit CV</Button>
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
                <TextField value={resumeDetails.fullName} onChange={e => setResumeDetails({ ...resumeDetails, fullName: e.target.value })} id="standard-basic-name" label="Full Name" variant="standard" />
                <TextField value={resumeDetails.location} onChange={e => setResumeDetails({ ...resumeDetails, location: e.target.value })} id="standard-basic-loc" label="Location" variant="standard" />
                <FormControl variant='standard'>
                  <InputLabel id="demo-simple-select-label">Choose Job Title</InputLabel>
                  <Select value={resumeDetails.job} onChange={e => setResumeDetails({ ...resumeDetails, job: e.target.value })} labelId="demo-simple-select-label" id="demo-simple-select" label="Job">
                    {
                      jobRole.jobRoles.map(job => (
                        <MenuItem key={job} value={job}>{job}</MenuItem>
                      ))
                    }
                  </Select>
                </FormControl>
              </div>
            </div>
            <div>
              <h3>Contact Details</h3>
              <div className="p-3 row">
                <TextField value={resumeDetails.email} onChange={e => setResumeDetails({ ...resumeDetails, email: e.target.value })} id="standard-basic-email" label="Email" variant="standard" />
                <TextField value={resumeDetails.phone} onChange={e => setResumeDetails({ ...resumeDetails, phone: e.target.value })} id="standard-basic-no" label="Contact No" variant="standard" />
                <TextField value={resumeDetails.linked} onChange={e => setResumeDetails({ ...resumeDetails, linked: e.target.value })} id="standard-basic-linkedin" label="Linkedin Link" variant="standard" />
                <TextField value={resumeDetails.github} onChange={e => setResumeDetails({ ...resumeDetails, github: e.target.value })} id="standard-basic-git" label="Github" variant="standard" />
              </div>
            </div>
            <div>
              <h3>Educational Details</h3>
              <div className="p-3 row">
                <TextField value={resumeDetails.degree} onChange={e => setResumeDetails({ ...resumeDetails, degree: e.target.value })} id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />
                <TextField value={resumeDetails.college} onChange={e => setResumeDetails({ ...resumeDetails, college: e.target.value })} id="standard-basic-college" label="College/University Name" variant="standard" />
                <TextField value={resumeDetails.year} onChange={e => setResumeDetails({ ...resumeDetails, year: e.target.value })} id="standard-basic-grad" label="Year of Graduation" variant="standard" />
              </div>
            </div>
            <div>
              <h3>Skills</h3>
              <div className="d-flex p-3">
                <input ref={skillRef} type="text" placeholder='Add New Skill' className='form-control' />
                <Button onClick={() => addSkill(skillRef.current.value)} >add</Button>
              </div>
              <h6>Added Skills : </h6>
              <div className="p-3 d-flex justify-content-between flex-wrap">
                {
                  resumeDetails?.skills?.map(skill => (
                    <Button onClick={() => removeSkill(skill)} key={skill} variant='contained' sx={{ backgroundColor: '#393a36' }} className='my-1'>{skill} <FaXmark className='ms-2' /> </Button>
                  ))
                }
              </div>
            </div>
            <div>
              <h3>Summary</h3>
              <div className="p-3 row">
                <TextField value={resumeDetails.summary} onChange={e => setResumeDetails({ ...resumeDetails, summary: e.target.value })} id='summary' label='Summary' multiline variant='standard' ></TextField>
              </div>
            </div>
            <button onClick={handleUpdateResume} className='btn text-light mt-3' style={{ backgroundColor: '#393a36' }}>UPDATE CV</button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit
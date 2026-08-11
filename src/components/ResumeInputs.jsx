import React from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Step, StepLabel, Stepper, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import jobRole from '../assets/jobRole.json'
import jobSkills from '../assets/jobSkills.json'
import summaries from '../assets/summaries.json'
import {saveResumeAPI} from '../services/apiService'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const steps=['Basic Information','Contact Details','Education Details','Review & Submit']

function ResumeInputs({resumeDetails,setResumeDetails}) {

  const navigate = useNavigate()

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderFormContent = (stepCount)=>{
    switch(stepCount){
      case 0: return(
        <div>
          <h3>Personal Details</h3>
          <div className="p-3 row">
            <TextField value={resumeDetails.fullName} onChange={e=>setResumeDetails({...resumeDetails,fullName:e.target.value})} id="standard-basic-name" label="Full Name" variant="standard" />
            <TextField value={resumeDetails.location} onChange={e=>setResumeDetails({...resumeDetails,location:e.target.value})} id="standard-basic-loc" label="Location" variant="standard" />
            <FormControl variant='standard'>
              <InputLabel id="demo-simple-select-label">Choose Job Title</InputLabel>
              <Select defaultValue={""} onChange={e=>setResumeDetails({...resumeDetails,job:e.target.value})} labelId="demo-simple-select-label" id="demo-simple-select" label="Job">
                {
                  jobRole.jobRoles.map(job=>(
                    <MenuItem key={job} value={job}>{job}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </div>
        </div>
      )
        break;
      case 1: return(
        <div>
          <h3>Contact Details</h3>
          <div className="p-3 row">
            <TextField value={resumeDetails.email} onChange={e=>setResumeDetails({...resumeDetails,email:e.target.value})} id="standard-basic-email" label="Email" variant="standard" />
            <TextField value={resumeDetails.phone} onChange={e=>setResumeDetails({...resumeDetails,phone:e.target.value})} id="standard-basic-no" label="Contact No" variant="standard" />
            <TextField value={resumeDetails.linked} onChange={e=>setResumeDetails({...resumeDetails,linked:e.target.value})} id="standard-basic-linkedin" label="Linkedin Link" variant="standard" />
            <TextField value={resumeDetails.github} onChange={e=>setResumeDetails({...resumeDetails,github:e.target.value})} id="standard-basic-git" label="Github" variant="standard" />
          </div>
        </div>
      )
        break;
      case 2: return(
        <div>
          <h3>Educational Details</h3>
          <div className="p-3 row">
            <TextField value={resumeDetails.degree} onChange={e=>setResumeDetails({...resumeDetails,degree:e.target.value})} id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />
            <TextField value={resumeDetails.college} onChange={e=>setResumeDetails({...resumeDetails,college:e.target.value})} id="standard-basic-college" label="College/University Name" variant="standard" />
            <TextField value={resumeDetails.year} onChange={e=>setResumeDetails({...resumeDetails,year:e.target.value})} id="standard-basic-grad" label="Year of Graduation" variant="standard" />
          </div>
        </div>
      )
        break;
      case 3: return(
        <div>
          <p>Our AI will generate Skills & Summary according to your job role. Click the <b>Generate AI Skills & Summary</b> button to Proceed. <b>Warning!!!</b> Once the form is submitted, it cannot be updated. </p>
        </div>
      )
        break;
      default: return null
        break;
    }
  }

  const generateSkillAndSummary = ()=>{
    setResumeDetails({...resumeDetails,skills:jobSkills[resumeDetails.job],summary:summaries[resumeDetails.job]})
    handleNext()
  }

  const handleSaveResume = async ()=>{
    const {fullName,location,job,email,phone,github,linked,degree,college,year,skills,summary}=resumeDetails
    if (fullName && location && job && email && phone && github && linked && degree && college && year && skills.length>0 && summary){
      const response = await saveResumeAPI(resumeDetails)
      if(response.status==201){
        toast.success("Resume added successfully!!!")
        const resumeId = response.data.id
        setTimeout(()=>{
          navigate(`/resumes/${resumeId}`)
        },2500)
        
      }
    }else{
      toast.info("Please fill the form completely!!!")
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleSaveResume}>
              FINISH
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box>
            {
              renderFormContent(activeStep)
            }
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
              {
              activeStep === steps.length - 1 ?
              <Button onClick={generateSkillAndSummary}>Generate AI Skills & Summary</Button>
              :
              <Button onClick={handleNext}> Next </Button>
              }
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default ResumeInputs
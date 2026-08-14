import React, { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { IoMdArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { getAllDownloadAPI } from '../services/apiService'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend); 

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

function Download() {

  const [downloadList, setDownloadList] = useState([])
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [label,setLabel] = useState([])
  const [value,setValue] = useState([])
  const colorPalette = ['#FF0000','#0000FF','#008000','#FFA500','#FFC0CB','#FFFF00']
  const backgroundColor = label.map((value,index)=>colorPalette[index%colorPalette.length])

  const data = {
    labels:label,
    datasets:[
      {
        label:"Download Count",
        data:value,
        backgroundColor
      }
    ]
  }

  useEffect(() => {
    getAllDownloads()
  }, [])

  const getAllDownloads = async () => {
    const result = await getAllDownloadAPI()
    setDownloadList(result.data)
    const output = {}
    result.data.forEach(item=>{
      const currentJob = item.jobRole
      if(currentJob in output){
        output[currentJob]+=1
      }else{
        output[currentJob]=1
      }
    })
      setLabel(Object.keys(output))
      setValue(Object.values(output))
  }

  return (
    <div className='container my-5'>
      <div className="d-flex justify-content-between align-items-center">
        <h2>All Downloaded Resume Details</h2>
        <button style={{ color: '#393a36' }} className='btn mx-2' onClick={handleOpen}>View in Chart</button>
      </div>
      {
        downloadList.length > 0 &&
        <p className='my-3'>Total Downloaded resumes from out site is <span className='fw-bolder'>{downloadList.length}</span></p>
      }
      <div className='row my-5'>
        {
          downloadList?.length > 0 ?
            downloadList?.map(resume => (
              <div key={resume?.id} className='col-lg-4 mb-3'>
                <div style={{ height: '400px' }} className="shadow p-3 rounded">
                  <h6>Review at : {resume?.timeStamp}</h6>
                  <div className="mt-3 text-center">
                    <Link to={`/resumes/${resume?.resumeId}`}><img className='w-100' height={'300px'} src={resume?.resumeImg} alt="download CV" /></Link>
                  </div>
                </div>
              </div>
            ))
            :
            <div className='text-center'>Candidate has not downloaded any resume yet!!!</div>
        }
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{backgroundColor: '#393a36', width:'100%',padding:'10px',color:'white',textAlign:'center'}}>
            CV Download Count  by Job Role
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="text-center">
              <Pie data={data}/>
            </div>
             <p style={{textAlign:'justify'}}>This chart provides an overview of the number of CV downloads associated with different job roles on the website. It helps visualize the demand and engagement for CVs across various career categories, making it easier to identify which job roles attract the highest number of downloads. By comparing download counts across roles, the chart can provide useful insights into user preferences and the popularity of different career opportunities on the platform.</p>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Download
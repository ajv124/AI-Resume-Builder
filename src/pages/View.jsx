import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Preview from '../components/Preview'
import { FaFileDownload } from "react-icons/fa";
import Edit from '../components/Edit'
import { MdTextSnippet } from 'react-icons/md';
import { AiFillBackward } from 'react-icons/ai';
import { IoMdRefresh } from 'react-icons/io';
import { viewResumeAPI } from "../services/apiService"
import { useState,useEffect } from 'react';

function View() {

  const [resume,setResume] = useState({})

  const {id} = useParams()

  useEffect(() => {
    getResumeDetails()
  }, [])
  

  const getResumeDetails = async () => {
  const response = await viewResumeAPI(id)
  if(response.status==200){
    setResume(response.data)
  }    
  }

  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="d-flex justify-content-center align-items-center">
            <button style={{color:'#393a36'}} className='btn mx-2'><FaFileDownload className='fs-3'/>
            Download CV</button>
            <Edit resumeDetails={resume} setResumeDetails={setResume} />
            <Link to={'/'} style={{color:'#393a36'}} className='btn mx-2'><AiFillBackward
            className='fs-3'/>Home</Link>
          </div>
          <div className="p-5">
            <Preview resumeDetails={resume} />
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  )
}

export default View
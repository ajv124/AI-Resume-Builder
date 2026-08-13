import React, { useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import Preview from '../components/Preview'
import { FaFileDownload } from "react-icons/fa";
import Edit from '../components/Edit'
import { MdTextSnippet } from 'react-icons/md';
import { AiFillBackward } from 'react-icons/ai';
import { IoMdRefresh } from 'react-icons/io';
import { viewResumeAPI } from "../services/apiService"
import { useState, useEffect } from 'react';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

function View() {

  const previewRef = useRef()

  const [resume, setResume] = useState({})

  const { id } = useParams()

  useEffect(() => {
    getResumeDetails()
  }, [])


  const getResumeDetails = async () => {
    const response = await viewResumeAPI(id)
    if (response.status == 200) {
      setResume(response.data)
    }
  }

  const downloadCV = async ()=>{
    const previewTag = previewRef.current
    const canvas = await html2canvas(previewTag)
    const pdf = new jsPDF()
    const imageWidth = pdf.internal.pageSize.getWidth()
    const imageHeight = pdf.internal.pageSize.getHeight()
    pdf.addImage(canvas,"PNG",0,0,imageWidth,imageHeight)
    pdf.save("resume.pdf")
  }

  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="d-flex justify-content-center align-items-center">
            <button onClick={downloadCV} style={{ color: '#393a36' }} className='btn mx-2'><FaFileDownload className='fs-3' />
              Download CV</button>
            <Edit resumeDetails={resume} setResumeDetails={setResume} />
            <Link to={'/'} style={{ color: '#393a36' }} className='btn mx-2'><AiFillBackward
              className='fs-3' />Home</Link>
          </div>
          <div ref={previewRef} className="p-5">
            <Preview resumeDetails={resume} />
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  )
}

export default View
import React from 'react'
import { Link } from 'react-router-dom'
import Preview from '../components/Preview'
import { FaFileDownload } from "react-icons/fa";
import Edit from '../components/Edit'
import { MdTextSnippet } from 'react-icons/md';
import { AiFillBackward } from 'react-icons/ai';
import { IoMdRefresh } from 'react-icons/io';

function View() {
  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="d-flex justify-content-center align-items-center">
            <button style={{color:'#393a36'}} className="btn fs-3 me-2"><FaFileDownload className='fs-3'/>
            Download CV</button>
            <Edit/>
            <Link to={'/all-resumes'} style={{color:'#393a36'}} className='btn mx-2'><MdTextSnippet
            className='fs-3'/>All Resumes</Link>
            <Link to={'/downloads'} style={{color:'#393a36'}} className='btn mx-2'><IoMdRefresh
            className='fs-3'/>Download History</Link>
            <Link to={'/all-resume-details'} style={{color:'#393a36'}} className='btn mx-2'><AiFillBackward
            className='fs-3'/>Home</Link>
          </div>
          <div className="p-5">
            <Preview/>
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  )
}

export default View
import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt,FaInstagram,FaFacebook, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div style={{height:'350px',backgroundColor:'#393a36'}} className='container-fluid text-light p-5'>
      <div className="row">
        <div className="col-lg-4">
          <h4 className='mb-3'>AI rBuilder</h4>
          <p style={{textAlign:'justify'}}>An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes.</p>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <h4 className="mb-3">Contact Us</h4>
          <p><MdOutlineEmail /> resumebuilder@gmail.com</p>
          <p><FaPhoneAlt /> 9087654321</p>
          <h5 className="my-3">Connect With Us</h5>
          <div className="fs-5">
            <FaInstagram/>
            <FaFacebook className='mx-2'/>
            <FaWhatsapp/>
          </div>
        </div>
        <h6 className="text-center my-2">Designed and built using React</h6>
      </div>
    </div>
  )
}

export default Footer
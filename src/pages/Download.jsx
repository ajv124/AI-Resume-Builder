import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { IoMdArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

function Download() {
  return (
    <div className='container my-5'>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Downloaded Resume Details</h2>
        <Link to={'/resume-details'}> <IoMdArrowBack/> Back</Link> 
      </div>
      <p className='mt-3'>Total Downloaded resumes from out site is <span className='fw-bolder'>10</span></p>
      <div className='row my-5'>
        <div className='col-lg-4 mb-3'>
          <div style={{height:'400px'}} className="shadow p-3 rounded">
            <h6>Review at : time stamp</h6>
            <div className="mt-3 text-center">
              <Link to={'/resumes/id'}><img className='w-100' height={'300px'} src="https://imgs.search.brave.com/879viT2vjhQ5UdXtyolUahckqeDVgXxeBLywOEhP03Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL3ByZW1p/dW0vcG5nLTI1Ni10/aHVtYi9yZXN1bWUt/aWNvbi1zdmctZG93/bmxvYWQtcG5nLTg4/MzkxNjUucG5nP2Y9/d2VicCZ3PTEyOA" alt="download CV" /></Link>
            </div>
          </div>
        </div>
      </div>
      Download</div>
  )
}

export default Download
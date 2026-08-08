import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
      <img src="https://imgs.search.brave.com/21JlExp5DTkbfKD2MIonMhvId0m_bZChbGxHQCO4xws/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMucHcubGl2ZS81/ZWIzOTNlZTk1ZmFi/NzQ2OGE3OWQxODkv/NWVhZWU4OTItYjlk/NS00MmUyLTg3ODUt/ZWUyZWYzZGIyOWY5/LndlYnA" alt="pnf" className="w-25" />
      <h6 className="mt-5">SORRY, LOOKS LIKE YOU'RE LOST</h6>
      <p>The page you're looking for is not available!!!</p>
      <Link to={'/'} className='btn btn-dark'>Back to Home</Link>
    </div>
  )
}

export default Pnf
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div style={{height:'100vh',backgroundImage:'url("/landing.png")',backgroundSize:'cover',backgroundAttachment:'fixed'}} className="d-flex justify-content-center align-items-center">
        <div style={{backgroundColor:'rgba(0,0,0,0.4}'}} className="w-25 p-5 rounded text-light text-center">
          <h1>Designed To Get Hired. Your Skills, Your Story, Your Next Job - All In One.</h1>
          <Link to={'/resume'} style={{backgroundColor:'#8c9d93'}} className='btn text-light mt-3'>Make your Resume with AI</Link>
        </div>
      </div>
      <div className="container my-5">
        <h1 className="text-center mb-5">What's AI rBuilder</h1>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <p style={{textAlign:'justify'}}>An AI rBuilder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>

            <p style={{textAlign:'justify'}}>The system can suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly.</p>

            <p style={{textAlign:'justify'}}>The main goal of the AI rBuilder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can edit content, preview their resume, and download it in formats such as PDF.</p>

            <p style={{textAlign:'justify'}}>This type of system is especially useful for students & fresh graduates, who want to create high-quality resumes that increase their chances of getting shortlisted for job interviews.</p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <img width={'100%'} height={'550px'} src="./resume.png" alt="resume" />
          </div>
        </div>
      </div>
      <div style={{height:'80vh',backgroundImage:'url("/team.png")',backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}}></div>
      <div className="container my-5">
        <h1 className="text-center mb-5">Testimony</h1>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <p style={{textAlign:'justify'}}>Trusted by professionals worldwide.
            At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>

            <p style={{textAlign:'justify'}}>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>

            <p style={{textAlign:'justify'}}>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out</p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <div className="row">
              <div className="col-md-3">
                <img className='img-fluid p-2' src="https://imgs.search.brave.com/HDpSyfXBjXPrwSK0H99eLcugtD0P6R3FqEjciDR9tO0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vaGVhZHNob3Qt/cG9ydHJhaXQtaGFw/cHktbWlsbGVubmlh/bC1pbmRpYW4td29t/YW4tbG9vay1jYW1l/cmEtcG9zaW5nLW93/bi1ob3VzZS1hcGFy/dG1lbnQtcHJvZmls/ZS1waWN0dXJlLXNt/aWxpbmcteW91bmct/bWl4ZWQtcmFjZS1m/ZW1hbGUtcmVudGVy/LXRlbmFudC1yZW50/LXJlYWwtZXN0YXRl/LWNvbmNlcHRfNjU2/OTMyLTM1MDcuanBn/P3NlbXQ9YWlzX3Rl/c3RfYiZ3PTc0MCZx/PTgw" alt="user" />
              </div>
              <div className="col-md-3">
                <img className='img-fluid p-2' src="https://imgs.search.brave.com/HDpSyfXBjXPrwSK0H99eLcugtD0P6R3FqEjciDR9tO0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vaGVhZHNob3Qt/cG9ydHJhaXQtaGFw/cHktbWlsbGVubmlh/bC1pbmRpYW4td29t/YW4tbG9vay1jYW1l/cmEtcG9zaW5nLW93/bi1ob3VzZS1hcGFy/dG1lbnQtcHJvZmls/ZS1waWN0dXJlLXNt/aWxpbmcteW91bmct/bWl4ZWQtcmFjZS1m/ZW1hbGUtcmVudGVy/LXRlbmFudC1yZW50/LXJlYWwtZXN0YXRl/LWNvbmNlcHRfNjU2/OTMyLTM1MDcuanBn/P3NlbXQ9YWlzX3Rl/c3RfYiZ3PTc0MCZx/PTgw" alt="user" />
              </div>
              <div className="col-md-3">
                <img className='img-fluid p-2' src="https://imgs.search.brave.com/HDpSyfXBjXPrwSK0H99eLcugtD0P6R3FqEjciDR9tO0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vaGVhZHNob3Qt/cG9ydHJhaXQtaGFw/cHktbWlsbGVubmlh/bC1pbmRpYW4td29t/YW4tbG9vay1jYW1l/cmEtcG9zaW5nLW93/bi1ob3VzZS1hcGFy/dG1lbnQtcHJvZmls/ZS1waWN0dXJlLXNt/aWxpbmcteW91bmct/bWl4ZWQtcmFjZS1m/ZW1hbGUtcmVudGVy/LXRlbmFudC1yZW50/LXJlYWwtZXN0YXRl/LWNvbmNlcHRfNjU2/OTMyLTM1MDcuanBn/P3NlbXQ9YWlzX3Rl/c3RfYiZ3PTc0MCZx/PTgw" alt="user" />
              </div>
              <div className="col-md-3">
                <img className='img-fluid p-2' src="https://imgs.search.brave.com/HDpSyfXBjXPrwSK0H99eLcugtD0P6R3FqEjciDR9tO0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vaGVhZHNob3Qt/cG9ydHJhaXQtaGFw/cHktbWlsbGVubmlh/bC1pbmRpYW4td29t/YW4tbG9vay1jYW1l/cmEtcG9zaW5nLW93/bi1ob3VzZS1hcGFy/dG1lbnQtcHJvZmls/ZS1waWN0dXJlLXNt/aWxpbmcteW91bmct/bWl4ZWQtcmFjZS1m/ZW1hbGUtcmVudGVy/LXRlbmFudC1yZW50/LXJlYWwtZXN0YXRl/LWNvbmNlcHRfNjU2/OTMyLTM1MDcuanBn/P3NlbXQ9YWlzX3Rl/c3RfYiZ3PTc0MCZx/PTgw" alt="user" />
              </div>
              <div className="col-md-3">
                <img className='img-fluid p-2' src="https://imgs.search.brave.com/HDpSyfXBjXPrwSK0H99eLcugtD0P6R3FqEjciDR9tO0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vaGVhZHNob3Qt/cG9ydHJhaXQtaGFw/cHktbWlsbGVubmlh/bC1pbmRpYW4td29t/YW4tbG9vay1jYW1l/cmEtcG9zaW5nLW93/bi1ob3VzZS1hcGFy/dG1lbnQtcHJvZmls/ZS1waWN0dXJlLXNt/aWxpbmcteW91bmct/bWl4ZWQtcmFjZS1m/ZW1hbGUtcmVudGVy/LXRlbmFudC1yZW50/LXJlYWwtZXN0YXRl/LWNvbmNlcHRfNjU2/OTMyLTM1MDcuanBn/P3NlbXQ9YWlzX3Rl/c3RfYiZ3PTc0MCZx/PTgw" alt="user" />
              </div>
              <div className="col-md-3">
                <img className='img-fluid p-2' src="https://imgs.search.brave.com/HDpSyfXBjXPrwSK0H99eLcugtD0P6R3FqEjciDR9tO0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vaGVhZHNob3Qt/cG9ydHJhaXQtaGFw/cHktbWlsbGVubmlh/bC1pbmRpYW4td29t/YW4tbG9vay1jYW1l/cmEtcG9zaW5nLW93/bi1ob3VzZS1hcGFy/dG1lbnQtcHJvZmls/ZS1waWN0dXJlLXNt/aWxpbmcteW91bmct/bWl4ZWQtcmFjZS1m/ZW1hbGUtcmVudGVy/LXRlbmFudC1yZW50/LXJlYWwtZXN0YXRl/LWNvbmNlcHRfNjU2/OTMyLTM1MDcuanBn/P3NlbXQ9YWlzX3Rl/c3RfYiZ3PTc0MCZx/PTgw" alt="user" />
              </div>
              <div className="col-md-3">
                <img className='img-fluid p-2' src="https://imgs.search.brave.com/HDpSyfXBjXPrwSK0H99eLcugtD0P6R3FqEjciDR9tO0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vaGVhZHNob3Qt/cG9ydHJhaXQtaGFw/cHktbWlsbGVubmlh/bC1pbmRpYW4td29t/YW4tbG9vay1jYW1l/cmEtcG9zaW5nLW93/bi1ob3VzZS1hcGFy/dG1lbnQtcHJvZmls/ZS1waWN0dXJlLXNt/aWxpbmcteW91bmct/bWl4ZWQtcmFjZS1m/ZW1hbGUtcmVudGVy/LXRlbmFudC1yZW50/LXJlYWwtZXN0YXRl/LWNvbmNlcHRfNjU2/OTMyLTM1MDcuanBn/P3NlbXQ9YWlzX3Rl/c3RfYiZ3PTc0MCZx/PTgw" alt="user" />
              </div>
              <div className="col-md-3">
                <img className='img-fluid p-2' src="https://imgs.search.brave.com/HDpSyfXBjXPrwSK0H99eLcugtD0P6R3FqEjciDR9tO0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vaGVhZHNob3Qt/cG9ydHJhaXQtaGFw/cHktbWlsbGVubmlh/bC1pbmRpYW4td29t/YW4tbG9vay1jYW1l/cmEtcG9zaW5nLW93/bi1ob3VzZS1hcGFy/dG1lbnQtcHJvZmls/ZS1waWN0dXJlLXNt/aWxpbmcteW91bmct/bWl4ZWQtcmFjZS1m/ZW1hbGUtcmVudGVy/LXRlbmFudC1yZW50/LXJlYWwtZXN0YXRl/LWNvbmNlcHRfNjU2/OTMyLTM1MDcuanBn/P3NlbXQ9YWlzX3Rl/c3RfYiZ3PTc0MCZx/PTgw" alt="user" />
              </div>
              <div className="col-md-3">
                <img className='img-fluid p-2' src="https://imgs.search.brave.com/HDpSyfXBjXPrwSK0H99eLcugtD0P6R3FqEjciDR9tO0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vaGVhZHNob3Qt/cG9ydHJhaXQtaGFw/cHktbWlsbGVubmlh/bC1pbmRpYW4td29t/YW4tbG9vay1jYW1l/cmEtcG9zaW5nLW93/bi1ob3VzZS1hcGFy/dG1lbnQtcHJvZmls/ZS1waWN0dXJlLXNt/aWxpbmcteW91bmct/bWl4ZWQtcmFjZS1m/ZW1hbGUtcmVudGVy/LXRlbmFudC1yZW50/LXJlYWwtZXN0YXRl/LWNvbmNlcHRfNjU2/OTMyLTM1MDcuanBn/P3NlbXQ9YWlzX3Rl/c3RfYiZ3PTc0MCZx/PTgw" alt="user" />
              </div>
              <div className="col-md-3">
                <img className='img-fluid p-2' src="https://imgs.search.brave.com/HDpSyfXBjXPrwSK0H99eLcugtD0P6R3FqEjciDR9tO0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vaGVhZHNob3Qt/cG9ydHJhaXQtaGFw/cHktbWlsbGVubmlh/bC1pbmRpYW4td29t/YW4tbG9vay1jYW1l/cmEtcG9zaW5nLW93/bi1ob3VzZS1hcGFy/dG1lbnQtcHJvZmls/ZS1waWN0dXJlLXNt/aWxpbmcteW91bmct/bWl4ZWQtcmFjZS1m/ZW1hbGUtcmVudGVy/LXRlbmFudC1yZW50/LXJlYWwtZXN0YXRl/LWNvbmNlcHRfNjU2/OTMyLTM1MDcuanBn/P3NlbXQ9YWlzX3Rl/c3RfYiZ3PTc0MCZx/PTgw" alt="user" />
              </div>
              <div className="col-md-3">
                <img className='img-fluid p-2' src="https://imgs.search.brave.com/HDpSyfXBjXPrwSK0H99eLcugtD0P6R3FqEjciDR9tO0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vaGVhZHNob3Qt/cG9ydHJhaXQtaGFw/cHktbWlsbGVubmlh/bC1pbmRpYW4td29t/YW4tbG9vay1jYW1l/cmEtcG9zaW5nLW93/bi1ob3VzZS1hcGFy/dG1lbnQtcHJvZmls/ZS1waWN0dXJlLXNt/aWxpbmcteW91bmct/bWl4ZWQtcmFjZS1m/ZW1hbGUtcmVudGVy/LXRlbmFudC1yZW50/LXJlYWwtZXN0YXRl/LWNvbmNlcHRfNjU2/OTMyLTM1MDcuanBn/P3NlbXQ9YWlzX3Rl/c3RfYiZ3PTc0MCZx/PTgw" alt="user" />
              </div>
              <div className="col-md-3">
                <img className='img-fluid p-2' src="https://imgs.search.brave.com/HDpSyfXBjXPrwSK0H99eLcugtD0P6R3FqEjciDR9tO0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vaGVhZHNob3Qt/cG9ydHJhaXQtaGFw/cHktbWlsbGVubmlh/bC1pbmRpYW4td29t/YW4tbG9vay1jYW1l/cmEtcG9zaW5nLW93/bi1ob3VzZS1hcGFy/dG1lbnQtcHJvZmls/ZS1waWN0dXJlLXNt/aWxpbmcteW91bmct/bWl4ZWQtcmFjZS1m/ZW1hbGUtcmVudGVy/LXRlbmFudC1yZW50/LXJlYWwtZXN0YXRl/LWNvbmNlcHRfNjU2/OTMyLTM1MDcuanBn/P3NlbXQ9YWlzX3Rl/c3RfYiZ3PTc0MCZx/PTgw" alt="user" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
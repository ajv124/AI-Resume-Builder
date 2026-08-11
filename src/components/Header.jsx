import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  const aboutUsContent ="An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF."
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'#393a36'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img width={'40px'} src='https://imgs.search.brave.com/mHuvrDMYVPT-oiETa4Yu5zr3UmaZyMHToIpCS23M6YM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTIv/NjU4LzI2OS9zbWFs/bC9zdHlsaXplZC0z/ZC1jdi1vci1yZXN1/bWUtaWxsdXN0cmF0/aW9uLWZyZWUtcG5n/LnBuZw' alt="icon"/>
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-light text-decoration-none'>AI rBuilder</Link>
          </Typography>
          <Link to={'/all-resumes'} className='text-light text-decoration-none fs-6'>All RESUMES</Link>
          <Link to={'/downloads'} className='text-light text-decoration-none mx-5 fs-6'>All DOWNLOADS</Link>
          <Tooltip title={aboutUsContent}><Button color="inherit" className='fs-6'>ABOUT US</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
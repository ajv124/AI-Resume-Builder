import axiosService from "../api/axiosService";

export const saveResumeAPI = async (resumeDetails)=>{
    return await axiosService("POST","/resumes",resumeDetails)
}

export const viewResumeAPI = async (resumeId)=>{
    return await axiosService("GET",`/resumes/${resumeId}`,{})
}

export const getAllResumesAPI = async ()=>{
    return await axiosService("GET",`/resumes`,{})
}
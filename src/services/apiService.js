import axiosService from "../api/axiosService";

export const saveResumeAPI = async (resumeDetails)=>{
    return await axiosService("POST","/resumes",resumeDetails)
}
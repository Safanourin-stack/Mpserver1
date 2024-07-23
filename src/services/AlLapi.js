import { base_url } from "./base_url";
import commonApi from "./commonApi";


export const addlist=async(data)=>{

  return await commonApi('POST',`${base_url}/todo`,data)
 }
 
 export const getlist=async()=>{
 
   return await commonApi('GET',`${base_url}/todo`,'')
 }
 
 export const deletelist=async(id)=>{
 
 return await commonApi('DELETE',`${base_url}/todo/${id}`,{})
 
 }


 export const editlist=async(id,data)=>{
 
  return await commonApi('PUT',`${base_url}/todo/${id}`,'data')
  
  }
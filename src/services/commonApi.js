import axios from 'axios'

const commonApi=async(reqMethod,reqUrl,reqBody)=>{
  const reqConfig={
   url:reqUrl,
   method:reqMethod,
   header:{'content-Type':'application/json'},
   data:reqBody
  }
 
 return await axios(reqConfig).then((res)=>{
   return res
 }).catch(err=>{
   return err
 })
 }
 
 export default commonApi
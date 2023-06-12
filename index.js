require ("dotenv").config();
const express=require("express")
const app=express();
const axios = require('axios');
const email = 'hkd159@gmail.com';
const key=process.env.apiKey
app.get('/',(req,res)=>{
async function verifyEmail(email, key) {
  try {
    console.log(typeof(process.env.apiKey))
    const response = await axios.get(`https://api.hunter.io/v2/email-verifier?email=${email}&apikey=${process.env.apiKey}`);
    return response.data.data;
  } catch (error) {
    console.error('Error verifying email:', error.message);
    throw error;
  }
}


verifyEmail(email, key)
  .then(data => {
    let status=data.status;
    let score=data.score;
    let result_website=data.result;
    res.write(status)
    res.write(score)
    res.write(result)
   res.send(score);
    console.log('Email verification result:', data.status);
    console.log('Email verification result:', data.score);
    console.log('Email verification result:', data.result);
  })
  .catch(error => {
    console.error('Error:', error);
  });
})
  //res.send(status,score,result_website)
app.listen(3000,(req,res)=>{
  console.log("Server has started")
})
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r = await axios.put( 
      'https://api.chatengine.io/users/',
      { "username": username,
      "secret": username, "first_name": username},
     {headers : {"private-key": "8ec2c09d-f74a-457e-b35a-73049c568cd6"}}

) 
//  console.log(r); 
   return res.status(r.status).json(r.data);
    }
  catch (e)
  { 
    console.log(e);
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3005);
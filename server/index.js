import socketIO from "socket.io";
import express from "express";
import bodyParser from "body-parser";
import multer from "multer";

import dotenv from "dotenv";
dotenv.config();

import mongoConnect from './config/mongo';
import Message from './models/message';
import fileUploader from "./controllers/pfpUpload";

const io = socketIO(process.env.SOCKET_PORT);
const app = express();


app.use((req, res, next) => {
    //allow access from every, elminate CORS
    res.setHeader('Access-Control-Allow-Origin','*');
    res.removeHeader('x-powered-by');
    //set the allowed HTTP methods to be requested
    res.setHeader('Access-Control-Allow-Methods','POST');
    //headers clients can use in their requests
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    //allow request to continue and be handled by routes
    next();
  });


  app.use(bodyParser.json());



  const storage = multer.memoryStorage();
const upload = multer({storage});

app.post('/api/upload', upload.single('avatar'), pfpUpload);


const initApp = async () =>{
    try{
      await mongoConnect();
      console.log("DB connection established");
      app.listen(process.env.HTTP_PORT,()=>{
        console.log(`HTTP Server listening on ${process.env.HTTP_PORT}`));
      });
    }catch (e) {
      throw e;
    }
  }
  
  initApp().catch(err => console.log(`Error on startup! ${err}`));




import mongoose from 'mongoose';
//import messageSchema1 from '../models/messages-schema.js';
const messageModel = mongoose.model('message');


//import messageSchema from "../models/messages-schema.js";
// var messages = [{id: 0, name: "Bill", message: "Hi All!"}, {id: 1, name: "Ann", message: "ICS 221 is fun!"}, {id: 2, name: "Johnny", message: "I'm Stranded!"}, {id: 3, name: "Barb", message: "Hi"}, {id: 4, name: "Frankito", message: "Who's Tired?"}, {id: 5, name: "Sarah", message: "I heart React"}];

// GET Request Handler
const getAllMessages = async (req, res) => { 
  try{
    let messages = await messageModel.find({}, '', {sort: {_id: -1}}).exec();
    res.status(200).json(messages); 
  }catch (err){
    res.status(400).send('Bad Request')
  }
  }; 
   
  // POST Request Handler
  const addNewMessage = async (req, res) => { 
    try { 
      // let message = await messageSchema1.validate(req.body);
      // message.id = messages.length + 1;
      // messages.unshift(message);
      //let message = await messageSchema.validate(req.body);
      let message = await messageModel.create(req.body);
      res.status(201).json(message);
      
      /*for(var i = 1; i < messages.length; i++){
        messages[i].id = i;
      }*/
     ; 
    } catch (err) { 
        console.log(err);
        res.status(400).send('Bad Request. The message in the body of the \Request is either missing or malformed.'); 
    }
  }; 
   
  const updateMessage = async (req, res) => {
      try{
        let message = await messageModel.findById(req.params.messageId).exec();
        if(!message){
          //there is no error but no message was found, so this doesnt match database therefor send error message back
          res.sendStatus(404);
        }else{
          //message found - is the user allowed to do this?
          if (message.name === req.user.username){
            message.msgText = req.body.msgText;
            await message.save();
            //send back 204 no content
            res.sendStatus(204);
          }else{
            res.sendStatus(401);
            console.log(message.name)
            console.log(req.user.username)
          }
        }
      }catch (error) {
        console.log(error);
        res.sendStatus(400);
      }
  }

  const deleteMessage = async (req, res) => {
    try{
      let message = await messageModel.findById(req.params.messageId).exec();
      if(!message){
        //there is no error but no message was found, so this doesnt match database therefor send error message back
        res.sendStatus(404);
      }else{
        //message found - is the user allowed to do this?
        if (message.name === req.user.username){
          message.msgText = req.body.msgText;
          await message.remove();
          //send back 204 no content
          res.sendStatus(204);
        }else{
          res.sendStatus(401);
          console.log(message.name)
          console.log(req.user.username)
        }
      }
    }catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
}

  export { getAllMessages, addNewMessage, updateMessage, deleteMessage };

  /*
  const addNewMessage = async (req, res) => { 
    try { 
      console.log("attempting to post");
      let message = await messageSchema.validate(req.body); 
          // TODO: add message as first element of array and 
          // respond with '201 Created' Status Code and  
          //the message, as JSON, in the body of the response. 
      
      //messages.unshift(message)

      res.status(201).send(message.body); 
  } catch (err) { 
      res.status(400).send('Bad Request. The message in the body of the \Request is either missing or malformed.'); 
} 
  }; */
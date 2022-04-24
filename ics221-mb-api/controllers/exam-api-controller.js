
import mongoose from 'mongoose';
const courseModel = mongoose.model('course');




    const getAllLabs = async (req, res) => { 
        try{
          var theArray = [{ id: 0, labNo: 1, labTopic: 'ICS Review: A Message Board SPA' }, { id: 1, labNo: 2, labTopic: 'Porting Your MB SPA to Next.js and Adding a form'}, { id: 2, labNo: 3, labTopic: 'Designing a RESTful API for the Message Board App'}]
          res.status(200).json(theArray); 
        }catch (err){
          res.status(400).send('Bad Request')
        }
        }; 
      

    const getAllCourses = async (req, res) =>{
      try{
        let courses = await courseModel.find({}, '', {sort: {_id: -1}}).exec();
        res.status(200).json(courses);
      }catch (err){
        res.status(400).send('Bad Request');
      }
      }; 

    const addNewCourse = async (req, res) => { 
      try { 
          if(await courseModel.exists({code: req.body.code})){
            res.status(403).send('Forbidden, A course with that code already exists.')
         }else{
        let course = await courseModel.create(req.body);
        res.status(201).json(course);
       }
        
        
      } catch (err) { 
          console.log(err);
          res.status(400).send('Bad Request. The course in the body of the \Request is either missing or malformed.'); 
      }
    }; 


//    await userModel.exists({'$or': [{code: code}]})

//res.status(200).send('Successful API New user POST request')




    export {getAllLabs, getAllCourses, addNewCourse}
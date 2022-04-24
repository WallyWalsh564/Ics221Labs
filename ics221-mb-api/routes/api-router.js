import express from 'express'; 
import { getAllMessages, addNewMessage, updateMessage, deleteMessage } from '../controllers/msg-api-controller.js'; 
import { addNewCourse, getAllLabs } from '../controllers/exam-api-controller.js';
import { registerNewUser } from '../controllers/user-api-controller.js';
import { logInUser } from '../controllers/user-api-controller.js';
import { getAllCourses } from '../controllers/exam-api-controller.js';
// import { addNewCourse } from '../controllers/exam-api-controller.js';
import passport from 'passport';



const router = express.Router(); 
 
router.route('/messages') 
.get(getAllMessages) 
.post(passport.authenticate('jwt', {session: false}), addNewMessage); 

router.route('/users')
.post(registerNewUser)

router.route('/labs')
.get(getAllLabs)

router.route('/login')
.post(passport.authenticate('local', {session: false}), logInUser);

router.route('/messages/:messageId')
.patch(passport.authenticate('jwt', {session: false}), updateMessage)

router.route('/messages/:messageId')
.delete(passport.authenticate('jwt', {session: false}), deleteMessage)

router.route('/courses')
.get(getAllCourses)

router.route('/courses')
.post(addNewCourse)

export default router;
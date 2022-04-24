import NewMessageForm from "./NewMessageForm";
import MessageBoard from "./MessageBoard";
import { useState, useRef } from 'react';
import axios from 'axios';
import { object } from "yup/lib/locale";
import { validateYupSchema } from "formik";
import LoginForm from "./LoginForm";
import jwt_decode from 'jwt-decode';


var userAuthenticated = false;
const Body = ({jsonData}) => {

    const usernameRef = useRef(null);
    const logInUser = async(values) => {
        try{
        console.log(values);
        const {data} = await axios.post('http://10.21.75.44:3004/api/login', values)
        setAuthenticateUser(true)
        const decodedToken = jwt_decode(data.token);
        usernameRef.current = decodedToken.username;
        console.log(userAuthenticated)
        sessionStorage.setItem('token', data.token);
        }catch(error){
            console.log(error)
        }
    }
    
    const addNewMessage = async(values) => {
       // values.message = values.msgText;
       const axiosReqConfig = {
           url: `${process.env.NEXT_PUBLIC_HOST}/api/messages`,
           method: 'post',
           headers: { 'Authorization': `Bearer ${sessionStorage.getItem('token')}` },
           data: values
        }
       
        try{
            values.name = usernameRef.current;
            const { data } = await axios(axiosReqConfig);
            setMessages([data, ...messages])
        }catch(error){
        console.log(error)
        }
        
    }
    let [messages, setMessages] = useState(jsonData)
    let [authenticateUser, setAuthenticateUser] = useState(false)
    
    return(
        <>
        {authenticateUser
                        ?<NewMessageForm addNewMessage= {addNewMessage}/>
                        
                        :<LoginForm logInUser = {logInUser}/>
                        
                    }
        
        <MessageBoard messages = {messages}/>
        </>
    )
    
}
export default Body;
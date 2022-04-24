import MessageData from "./MessageData";
const UserMessageData = ({messages}) =>{
    
    return(
        <>
            <tbody>
                {messages.map( (userMessage, index) =><MessageData key={userMessage.id} {...userMessage} msgNum = {index + 1}/>)} 
            </tbody>
        </>
    )
    
}
export default UserMessageData;
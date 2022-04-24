const MessageData = ({name, msgNum, msgText}) =>{
    
    return(
        <>
        
        <tr>
            <td>{msgNum}</td><td>{name}</td><td>{msgText}</td>
        </tr>
        </>
        )
}

export default MessageData;
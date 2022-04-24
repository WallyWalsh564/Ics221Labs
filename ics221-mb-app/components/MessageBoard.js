import Table from 'react-bootstrap/Table';
import UserMessageData from './UserMessageData';
const MessageBoard = ({messages}) => {
    

    return(
        <Table striped bordered hover>
            <thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Message</th>
        </tr>
    </thead>
        <UserMessageData messages = {messages} />
        </Table>
    )
}
export default MessageBoard;
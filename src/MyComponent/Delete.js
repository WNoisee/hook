import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './App.scss'

const Delete = (props) => {
    const DeleteData = (event) => {
        event.preventDefault();
        const DataDeleteReceived = props.DataDeleteSend
        const IDReceived = props.IDSend
        const check = DataDeleteReceived.filter((item) => item['id'] != IDReceived);
        props.SetDataSend(check)
    }
    return (
        <div>
            <div className='click'>
                <Button onClick={(event) => DeleteData(event)}>Delete</Button>
            </div>
        </div>
    )
}

export default Delete;
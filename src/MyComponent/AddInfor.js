import {useState } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Delete from "./Delete";

const AddInfor = (props) => {
    const [id, setId] = useState(0)
    const [AllInfor, SetAllInfor] = useState([{
        'name': 'phong',
        'Email': 'doanthanhphong209@gmail.com',
        'password': 'cuoccachmangAI8',
        'id': 0,
    }])
    const ProcessToAdd = () => {
        setId(id + 1)
        const InforReceived = {
            'name': props.NameSend,
            'Email': props.EmailSend,
            'password': props.PasswordSend,
            'id' : id+1,
        }
        SetAllInfor([...AllInfor, InforReceived])
    }
    return (
        <div>
            <div className="add"><Button onClick={() => ProcessToAdd()}>ADD And Show</Button></div>
            {AllInfor.map((item) => {
                return (
                    <div>
                        <div className="InforAdded">
                            <ul>
                                <li>{item['name']}</li>
                                <br></br>
                                <li>{item['Email']}</li>
                                <br></br>
                                <li> {item['password']}</li>
                            </ul>
                        </div>
                        <div>
                            <Delete IDSend={item['id']} DataDeleteSend={AllInfor} SetDataSend={SetAllInfor}></Delete>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AddInfor;
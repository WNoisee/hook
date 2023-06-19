import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './App.scss'
import AddInfor from './AddInfor';

const ChangeInfor = () => {
    const [UsernameCurrent, SetUsernameCurrent] = useState('phong')
    const [EmailCurrent, SetEmailCurrent] = useState('doanthanhphong209@gmail.com')
    const [PasswordCurrent, SetPasswordCurrent] = useState('cuoccachmangAI8')

    const ProcessInforUsername = (event) => {
        SetUsernameCurrent(event.target.value)
    }
    const ProcessInforEmail = (event) => {
        SetEmailCurrent(event.target.value)
    }
    const ProcessInforPassword = (event) => {
        SetPasswordCurrent(event.target.value)
    }
    const ChangeInforSuccess = (event) => {
        alert('Changed Successfully')
    }
    return (
        <div>
            <div className='background'>
                <h1 className='information'>Change Your Information</h1>
                <div className='ChangeYourInfor'>
                    <Form>
                        <FormGroup>
                            <label>Username</label>
                            <Input type='text' placeholder='Enter Username' onChange={(event) => ProcessInforUsername(event)}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input type="email" name="email" placeholder="Enter email" onChange={(event) => ProcessInforEmail(event)} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input type="password" name="password" placeholder="Enter password" onChange={(event) => ProcessInforPassword(event)} />
                        </FormGroup>
                        <Button onClick={(event) => ChangeInforSuccess(event)}>Submit</Button>
                    </Form>
                    <hr></hr>
                </div>
            </div>
            <div className='Showfix'>
                <h1>Show your Information</h1>
                <ul>
                    <li>{UsernameCurrent}</li>
                    <br></br>
                    <li>{EmailCurrent}</li>
                    <br></br>
                    <li>{PasswordCurrent}</li>
                </ul>
            </div>
            <hr></hr>
            <AddInfor NameSend={UsernameCurrent} EmailSend={EmailCurrent} PasswordSend={PasswordCurrent}></AddInfor>
        </div>
    )
}

export default ChangeInfor;


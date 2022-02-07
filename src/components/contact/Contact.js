import React from 'react';
import { Input, Form, Content, TextArea } from './ContactElements'
import { Button } from '../../globalStyles';

const contact = () => {
    return <div>
        <Content>
            <h1>Contact Form</h1>
            <Form>
                <Input
                    value={''}
                    onChange={''}
                    name="Name"
                    type="text"
                    placeholder="Name" />
                <Input
                    value={''}
                    onChange={''}
                    name="username"
                    type="email"
                    placeholder="Email" />
                <Input
                    value={''}
                    onChange={''}
                    name='mobil'
                    type="text"
                    placeholder="Mobile" />
                <TextArea


                />
                <Button fontBig>Submit</Button>

            </Form>
        </Content>
    </div>;
};

export default contact;

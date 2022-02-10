import React from 'react';
import {
    Input, Form, Row, TextArea, InfoSec,
} from './ContactElements'
import GenIcon from './GenIcon'
import { Text, Button } from '../common';

const Contact = () => {
    return <>
        <Row>
            <InfoSec>
                <Text color='white' size='24px'>Contact Info</Text>
                <GenIcon />
            </InfoSec>
            <Form>
                <Input
                    // value={''}
                    onChange={''}
                    name="Name"
                    type="text"
                    placeholder="Name" />
                <Input
                    //value={''}
                    onChange={''}
                    name="username"
                    type="email"
                    placeholder="Email" />
                <Input
                    // value={''}
                    onChange={''}
                    name='mobil'
                    type="number"
                    placeholder="Mobile" />
                <TextArea
                />
                <Button fontBig>Submit</Button>
            </Form>
        </Row>
    </>;
};

export default Contact;

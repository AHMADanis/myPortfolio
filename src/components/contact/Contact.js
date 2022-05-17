import React, { useState } from 'react';
import { Input, Form, Row, TextArea, InfoSec } from './ContactElements'
import GenIcon from './GenIcon'
import { Text, Button } from '../common';
import { send } from 'emailjs-com';

const Contact = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_h5q3rus',
            'template_r4zlraj',
            toSend,
            'user_ZQgtvcIGS6YR9MDDF6Un8'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return <>
        <Row>

            <InfoSec>
                <Text color='white' size='24px'>Contact Info</Text>
                <GenIcon />
            </InfoSec>

            <Form onSubmit={onSubmit}>
                <Input
                    type='text'
                    name='from_name'
                    placeholder='from name'
                    value={toSend.from_name}
                    onChange={handleChange} />
                <Input
                    type='text'
                    name='reply_to'
                    placeholder='Your email'
                    value={toSend.reply_to}
                    onChange={handleChange} />
                <Input
                    type='text'
                    name='to_name'
                    placeholder='to name'
                    value={toSend.to_name}
                    onChange={handleChange} />
                <TextArea
                    type='text'
                    name='message'
                    placeholder='Your message'
                    value={toSend.message}
                    onChange={handleChange}
                />
                <Button fontBig type='submit'>Submit</Button>
            </Form>
        </Row>
    </>;
};

export default Contact;

import React from 'react';
import {
    Input, Form,
    Row, TextArea,
    Container, InfoSec,
    InfoIcon, IconWrapper,
    IconText, EmailIcon
} from './ContactElements'
import { Button } from '../../globalStyles';
import GenIcon from './GenIcon'



const Contact = () => {
    return <>
        <Container>
            <Row>
                <InfoSec>
                    <h1>Contact Info</h1>

                    <IconWrapper>
                        <GenIcon
                            name="FaUserNurse"
                            color="red"
                            size="16px"
                        />
                        <InfoIcon />
                        <IconText>Name</IconText>
                    </IconWrapper>
                    <IconWrapper>
                        <EmailIcon />
                        <IconText>Name</IconText>
                    </IconWrapper>
                    <IconWrapper>
                        <InfoIcon />
                        <IconText>Name</IconText>
                    </IconWrapper>
                    <IconWrapper>
                        <InfoIcon />
                        <IconText>Name</IconText>
                    </IconWrapper>
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
        </Container>
    </>;
};

export default Contact;

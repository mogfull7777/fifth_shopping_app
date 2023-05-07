import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const FindEmail = () => {

    const [phoneNumber, setPhoneNumber] = useState("");

    const phoneNumberSubmitHandle = async (e) => {

        e.preventDefault()

        try {

            const emailList = {phoneNumber}

            console.log(emailList)

        } catch (err) {
            console.log(err.massage)
        }
    }

    return (
        <Container>
            <Row className={'justify-content-center'}>
                <Col xs={12} xl={6} className={'mt-5'}>

                    <h1>Find Email</h1>

                    <Form onSubmit={phoneNumberSubmitHandle}>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">

                            <Form.Text className="text-muted">
                                이메일을 받으실 핸드폰 번호를 입력해주세요.
                            </Form.Text>

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="phoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="000-0000-0000"
                                value={phoneNumber}
                                onChange={e => setPhoneNumber(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>



                </Col>
            </Row>
        </Container>

    );
};

export default FindEmail;
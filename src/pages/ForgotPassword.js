import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const ForgotPassword = () => {

    const [email, setEmail] = useState("");

    const emailSubmitHandle = async (e) => {

        e.preventDefault()

        try {

            const emailLiset = {email}

            console.log(emailLiset)

        } catch (err) {
            console.log(err.massage)
        }

    }

    return (
        <Container>
            <Row className={'justify-content-center'}>
                <Col xs={12} xl={6} className={'mt-5'}>

                    <h1>Forgot Password</h1>

                    <Form onSubmit={emailSubmitHandle}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <Form.Text className="text-muted">
                                비밀번호 재설정 링크를 받으실 이메일 주소를 입력해주세요.
                            </Form.Text>

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
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

export default ForgotPassword;
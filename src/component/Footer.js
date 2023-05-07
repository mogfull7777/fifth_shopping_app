import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {
    return (
        <div>
            <Container>
                <Row className={'text-center py-3'}>
                    <Col>
                        Copyright &copy; Junyoung An
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
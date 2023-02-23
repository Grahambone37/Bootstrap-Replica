import { Col, Form, Row, InputGroup } from "react-bootstrap";


export default function LocationForm() {
    return (
        <div style={{
            backgroundImage: 'url(https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg)',
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#DFEED6',
            height: '20em'
        }}>
            <Row>
                    <Form>
                <Col xs={1}>
                        <Form.Select style={{
                            marginLeft: '40px',
                            marginTop: '30px'
                        }}>
                            <option value="US">🗽US</option>
                            <option value="CA">🏒CA</option>
                        </Form.Select>
                </Col>
                    </Form>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col xs={2}></Col>
                <Col xs={6}>
                    <h1>Order groceries for delivery or pickup today</h1>
                    <p>Whatever you want from local stores, brought right to your door.</p>
                    <Form>
                        <InputGroup>
                            <InputGroup.Text style={{
                                backgroundColor: 'white',
                                border: 'none'
                            }}>🗺</InputGroup.Text>
                            <Form.Control type="email" placeholder="Enter your address" style={{
                                border: 'none'
                            }}></Form.Control>
                            <InputGroup.Text style={{
                                backgroundColor: 'white'
                            }}>➡</InputGroup.Text>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}
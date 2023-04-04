import { Image, Col, Row, Form, Button } from "react-bootstrap";
// import bookflix1 from "../../images/bookflix.png"
import {useNavigate} from "react-router-dom"

function SignUp() {
    var navigate=useNavigate()
    return (
        <div style={{ width: '100vw', height: '100vh', background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center',padding:"10px" }}>
            <Form>
                <Col>
                    <Row style={{padding:"2vw" }}>
                        <Form.Group>
                            <Image src="/images/bookflix.png" />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formGridEmail">
                                <Form.Control type="text" placeholder="Your FullName" style={{ borderColor: 'brown', borderRadius: '0px' }} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Control type="password" placeholder="Password" style={{ borderColor: 'brown', borderRadius: '0px' }} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Group className="mb-3" controlId="formGridPassword">
                            <Form.Control type="email" placeholder="Email" style={{ borderColor: 'brown', borderRadius: '0px' }} />
                        </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Control type="password" placeholder="Confirm Password" style={{ borderColor: 'brown', borderRadius: '0px' }} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Group className="mb-3" controlId="formGridPassword">
                            <Form.Control type="text" onfocus="(this.type='date')" onblur="(this.type='text')" placeholder="Date Of Birth" style={{ borderColor: 'brown', borderRadius: '0px' }} />
                        </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Control type="tel" placeholder="Mobile Number" style={{ borderColor: 'brown', borderRadius: '0px' }} />
                            </Form.Group>
                        </Col>
                    </Row>
                    
                    <Row style={{ textAlign: 'center',justifyContent:"space-between" }}>
                        <Form.Group>
                            <Form.Label  style={{ background: 'black', color: 'grey',fontWeight:"bold",fontSize:"20px" }}>Create an account as an</Form.Label>
                            <Form.Check label="User" type="radio" name="user" style={{ background: 'black', color: 'grey' }}/>
                            <Form.Check label="Contributor" type="radio" name="user" style={{ background: 'black', color: 'grey' }}/>
                        </Form.Group>
                    </Row>
                    <Row style={{ padding: '0.7vw' }}>
                        <Button variant="primary" type="submit" style={{ borderRadius: '0px', borderColor: 'brown', backgroundColor: 'red' }}>
                            Sign Up
                        </Button>
                    </Row>
                    <hr style={{ color: 'grey' }} />
                    <Row style={{ textAlign: 'center' }}>
                        <Form.Group>
                            <Form.Label onClick={()=>navigate('/adminlogin')} as="button" style={{ background: 'black', color: 'grey' }}>Already have an account!</Form.Label>
                        </Form.Group>
                    </Row>
                </Col>
            </Form>
        </div>
    );
}
export default SignUp;
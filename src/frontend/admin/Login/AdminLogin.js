import {Image, Col, Row, Form, Button } from "react-bootstrap";
// import bookflix1 from ""
import {useNavigate} from "react-router-dom"

function AdminLogin() {
    var navigate=useNavigate();
    return (
        <div style={{width:'100vw',height:'100vh',background:'black',display:'flex',justifyContent: 'center', alignItems: 'center'}}>
            <Form>
                <Col>
                    <Row style={{padding:"2vw"}}>
                        <Form.Group>
                            <Image src="/images/bookflix.png"  />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="formGridEmail">
                            <Form.Control type="email" placeholder="Email" style={{borderColor:'brown',borderRadius:'0px'}} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="formGridPassword">
                            <Form.Control type="password" placeholder="Password" style={{borderColor:'brown',borderRadius:'0px'}}/>
                        </Form.Group>
                    </Row>
                    <Row style={{ padding: '15px' }}>
                        <Button variant="primary" type="submit" style={{borderRadius:'0px',borderColor:'brown', backgroundColor:'red'}}>
                            Submit
                        </Button>
                    </Row>
                    <Row style={{textAlign:'center'}}>
                        <Form.Group>
                            <Form.Label as="button" style={{ background:'black',color:'grey'}}>Forgot Your Password?</Form.Label>
                        </Form.Group>
                    </Row>
                    <hr style={{color:'grey'}} />
                    <Row style={{textAlign:'center'}}>
                        <Form.Group>
                            <Form.Label onClick={()=>navigate('/signup')} as="button" style={{ background:'black',color:'grey'}}>Create an Account</Form.Label>
                        </Form.Group>
                    </Row>
                </Col>
            </Form>
        </div>
    );
}
export default AdminLogin;
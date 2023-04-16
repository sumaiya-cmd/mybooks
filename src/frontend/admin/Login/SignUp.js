import { Image, Col, Row, Form, Button } from "react-bootstrap";
import  {useState} from "react";
import {useNavigate} from "react-router-dom"
import { signUp } from '../../Config/AxiosConfig' ;

function SignUp() {
    var navigate=useNavigate()

    const [dets, setdets] = useState({
        username:"",
        email :"",
        password:"",
        role:"",
        dateOfBirth:"" ,
        mobileNo:"" 
    })

    const handleChange = e => {
        const { name, value } = e.target
        setdets({
            ...dets,
            [name]: value
        })
        
    }
    const submitHandler =async(e)=>{
        e.preventDefault() ;
        
        const { username, email, password, role, dateOfBirth , mobileNo } = dets
        try {
            if( username && email && password &&role&& dateOfBirth && mobileNo ){
                const res = await signUp(dets) ;
                // debugger ;
                alert(res);
                alert("success") ;
                    
            } else {
                alert("invlid input")
            }
        } catch (error) {
            alert(error.message) ;
        }
        
        
    }

    return (
        <div style={{ width: '100vw', height: '100vh', background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center',padding:"10px" }}>
            <Form onSubmit ={submitHandler }>
                <Col>
                    <Row style={{padding:"3vw" }}>
                        <Form.Group>
                            <Image src="/images/bookflix.png" style={{height:"100px"}}/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formGridEmail">
                                <Form.Control  name="username" value={dets.username} onChange={handleChange} type="text" placeholder="Name" style={{ borderColor: 'brown', borderRadius: '0px' }} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Control name="password" value={dets.password}onChange={handleChange}  type="password" placeholder="Password" style={{ borderColor: 'brown', borderRadius: '0px' }} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Group className="mb-3" controlId="formGridPassword">
                            <Form.Control name="email" value={dets.email} onChange={handleChange} type="email" placeholder="Email" style={{ borderColor: 'brown', borderRadius: '0px' }} />
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
                            <Form.Control name="dateOfBirth" onChange={handleChange} value={dets.dateOfBirth} type="date"   placeholder="Date Of Birth" style={{ borderColor: 'brown', borderRadius: '0px' }} />
                        </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Control name="mobileNo" value={dets.mobileNo} onChange={handleChange} type="tel" placeholder="Mobile Number" style={{ borderColor: 'brown', borderRadius: '0px' }} />
                            </Form.Group>
                        </Col>
                    </Row>
                    
                    <Row style={{ textAlign: 'center',justifyContent:"space-between" }}>
                        <Form.Group>
                            <Form.Label  style={{ background: 'black', color: 'grey',fontWeight:"bold",fontSize:"20px" }}>Create an account as an</Form.Label>
                            <Form.Check  label="User" onChange={handleChange} value="User" checked={dets.role === "User"}  type="radio" name="role" style={{ background: 'black', color: 'grey' }}/>
                            <Form.Check label="Contributor" onChange={handleChange} value="Contributor" checked={dets.role === "Contributor"} type="radio" name="role"   style={{ background: 'black', color: 'grey' }}/>
                        </Form.Group>
                    </Row>
                    <Row style={{ padding: '0.7vw' }}>
                        <Button   variant="primary" type="submit" style={{ borderRadius: '0px', borderColor: 'brown', backgroundColor: '#6A4D3A' }}>
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
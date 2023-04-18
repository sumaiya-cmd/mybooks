import { Image, Col, Row, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import { login } from '../../Config/AxiosConfig';
import Swal from "sweetalert2";

function AdminLogin() {
    var navigate = useNavigate();

    const [loginDets, setloginDets] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setloginDets({
            ...loginDets,
            [name]: value
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        const { email, password } = loginDets;
        try {
            if (email && password) {
                const res = await login(loginDets);
                // debugger ;
                console.log(res.data);
                // alert("success");
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'logged in successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                             // console.log(res) ;
                if (res.data.user.role === "User") {
                    navigate('/userinterface')
                }
                else if (res.data.user.role === "Contributor") {
                    navigate('/dashboard')
                }
                else {
                    navigate('/dashboard')
                }

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `Invalid input`,
                })

            }

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.response.data.message}`,
            })
            // console.log(error.response.data.message)
        }
    }

    return (
        <div style={{ width: '100vw', height: '100vh', background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Form onSubmit={submitHandler}>
                <Col>
                    <Row style={{ padding: "2vw" }}>
                        <Form.Group>
                            <Image src="/images/bookflix.png" style={{ height: "100px" }} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="formGridEmail">
                            <Form.Control name="email" value={loginDets.email} onChange={handleChange} type="email" placeholder="Email" style={{ borderColor: 'brown', borderRadius: '0px' }} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="formGridPassword">
                            <Form.Control name="password" value={loginDets.password} onChange={handleChange} type="password" placeholder="Password" style={{ borderColor: 'brown', borderRadius: '0px' }} />
                        </Form.Group>
                    </Row>
                    <Row style={{ padding: '15px' }}>
                        <Button variant="primary" type="submit" style={{ borderRadius: '0px', borderColor: 'brown', backgroundColor: '#6A4D3A' }}>
                            Submit
                        </Button>
                    </Row>
                    <Row style={{ textAlign: 'center' }}>
                        <Form.Group>
                            <Form.Label as="button" style={{ background: 'black', color: 'grey' }}>Forgot Your Password?</Form.Label>
                        </Form.Group>
                    </Row>
                    <hr style={{ color: 'grey' }} />
                    <Row style={{ textAlign: 'center' }}>
                        <Form.Group>
                            <Form.Label onClick={() => navigate('/signUp')} as="button" style={{ background: 'black', color: 'grey' }}>Create an Account</Form.Label>
                        </Form.Group>
                    </Row>
                </Col>
            </Form>
        </div>
    );
}
export default AdminLogin;
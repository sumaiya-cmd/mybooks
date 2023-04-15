import {Image, Col, Row, Form, Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import {useState}from'react' ;
import {login} from'../../Config/AxiosConfig' ;

function AdminLogin() {
    var navigate=useNavigate();

    const [loginDets, setloginDets] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setloginDets({
            ...loginDets,
            [name]: value
        })
    }

    const submitHandler =async(e)=>{
        e.preventDefault();
        
        const {  email ,password} = loginDets ;
        try {
            if( email && password  ){
                const res = await login(loginDets) ;
                // debugger ;
                alert("success") ;
                // console.log(res) ;
                if(res.data.user.role === "User"){
                    navigate('/')
                }
                else if(res.data.user.role ==="Contributor" ){
                    navigate('/dashboard')
                }
                else{
                    navigate('/dashboard')
                }
                    
            } else {
                alert("invlid input")
            }

        } catch (error) {
            alert(error.message) ;
        }
    }

    return (
        <div style={{width:'100vw',height:'100vh',background:'black',display:'flex',justifyContent: 'center', alignItems: 'center'}}>
            <Form onSubmit={submitHandler}>
                <Col>
                    <Row style={{padding:"2vw"}}>
                        <Form.Group>
                            <Image src="/images/bookflix.png"  />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="formGridEmail">
                            <Form.Control name="email" value={loginDets.email} onChange={handleChange} type="email" placeholder="Email" style={{borderColor:'brown',borderRadius:'0px'}} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="formGridPassword">
                            <Form.Control name="password" value={loginDets.password} onChange={handleChange} type="password" placeholder="Password" style={{borderColor:'brown',borderRadius:'0px'}}/>
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
                            <Form.Label onClick={()=>navigate('/signUp')} as="button" style={{ background:'black',color:'grey'}}>Create an Account</Form.Label>
                        </Form.Group>
                    </Row>
                </Col>
            </Form>
        </div>
    );
}
export default AdminLogin;
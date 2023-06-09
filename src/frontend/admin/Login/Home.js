import   './Home.css';
// import logo  from '../../images/bookflix.png';
import AdminLogin from './AdminLogin';
import {useNavigate} from 'react-router-dom'

function Home(){
    var navigate=useNavigate();
    return(
        <div className='main'>
            <div class="head">
                <img src="/images/bookflix.png" alt="book" style={{height:"100px"}} />
                {/* <h1 style={{color:"#6A4D3A",fontFamily:"unset",fontWeight:"400pt"}}>Bookflix</h1> */}
            </div>
            <div className="head">
                <p>Who's reading ?</p>
            </div>
            <div className="accessdiv">
                <div id="user"  className='ac' onClick={()=>navigate('/adminlogin')}>
                    <h4 >User</h4>
                </div>
                <div id="child" className='ac'>
                    <h4 >Children</h4>
                </div>
                <div id="admin" className='ac'onClick={()=>navigate('/adminlogin')}>
                    <h4 >Contributor</h4>
                </div>
            </div>
        </div>
    );
}

export default Home;
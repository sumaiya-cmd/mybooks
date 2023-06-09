import { useNavigate } from 'react-router-dom';
import Dashboard from './UserInterface';
import { deletebook } from "../Store/Actions/CartActions";
import { useSelector ,useDispatch } from "react-redux";
// import { Delete } from '@mui/icons-material';


export default function AddToCart() {
  var navigate = useNavigate()
  const dispatch= useDispatch() ;
  const{productDetails }=useSelector(state =>state.product) ;
  console.log(productDetails);

  const DeleteItem =(id)=>{
      dispatch(deletebook(id)) ;
  }

  return (
    <div class="pt-5">
      <section class="" style={{ backgroundColor: "#eee",height:"auto" }}>
        <div class="container pt-4">
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col">
              <div class="card rounded-4" style={{ backgroundImage: `url("/images/Web 1920 – 1.png")` }}>
                <div class="card-body p-4">

                  <div class="row">

                    <div class="col-lg-7">
                      <h5 class="mb-2" onClick={()=>navigate('/userinterface')}><button class="text-white p-1" style={{backgroundColor:"transparent"}}><i
                        class="fas fa-long-arrow-alt-left me-1"></i>Continue shopping</button></h5>
                      <hr />

                      <div class="d-flex justify-content-between align-items-center mb-3">
                        <div class="text-white">
                          <p class="mb-1">Shopping cart</p>
                          <p class="mb-0">You have following items in your cart</p>
                        </div>
                        <div>
                          <p class="mb-0"><span class="text-white">Sort by:</span> <a href="#!"
                            class="text-white">price <i class="fas fa-angle-down mt-1"></i></a></p>
                        </div>
                      </div>

                      {/* <div class="card mb-3">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex flex-row align-items-center">
                        <div>
                          <img
                            src="#"
                            class="img-fluid rounded-3" alt="Shopping item" style={{width: "65px"}}/>
                        </div>
                        <div class="ms-3">
                          <h5>Iphone 11 pro</h5>
                          <p class="small mb-0">256GB, Navy Blue</p>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center">
                        <div style="width: 50px;">
                          <h5 class="fw-normal mb-0">2</h5>
                        </div>
                        <div style="width: 80px;">
                          <h5 class="mb-0">$900</h5>
                        </div>
                        <a href="#!" style="color: #cecece;"><i class="fas fa-trash-alt"></i></a>
                      </div>
                    </div>
                  </div>
                </div> */}
                      {
                    (!productDetails) ? <h1>LOADING...</h1 > :
                        productDetails.map((item) => {
                            return <div class="card mb-3">
                        <div class="card-body">
                          <div class="d-flex justify-content-between p-2">
                            <div class="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src={item.book_image}
                                  class="img-fluid rounded-3" alt="Shopping item" style={{ width: "65px" }} />
                              </div>
                              <div class="ms-3">
                                <h5>{item.book_title}</h5>
                                <p class="small mb-0">By {item.book_author}</p>
                              </div>
                            </div>
                            <div class="d-flex flex-row align-items-center pt-3">
                              <div style={{ width: "50px" }}>
                                {/* <h5 class="fw-normal mb-0">2</h5> */}
                              </div>
                              <div style={{ width: "90px" }}>
                                <h5 class="mb-0">${item.book_price}</h5>
                              </div>
                              <a href="#!" onClick={()=>DeleteItem(item.id)} style={{ color: "#cecece" }}><i class="fas fa-trash-alt"></i></a>
                            </div>
                          </div>
                        </div>
                      </div> })
                }

                      {/* <div class="card mb-3">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex flex-row align-items-center">
                        <div>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp"
                            class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;"/>
                        </div>
                        <div class="ms-3">
                          <h5>Canon EOS M50</h5>
                          <p class="small mb-0">Onyx Black</p>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center">
                        <div style="width: 50px;">
                          <h5 class="fw-normal mb-0">1</h5>
                        </div>
                        <div style="width: 80px;">
                          <h5 class="mb-0">$1199</h5>
                        </div>
                        <a href="#!" style="color: #cecece;"><i class="fas fa-trash-alt"></i></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card mb-3 mb-lg-0">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex flex-row align-items-center">
                        <div>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp"
                            class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;"/>
                        </div>
                        <div class="ms-3">
                          <h5>MacBook Pro</h5>
                          <p class="small mb-0">1TB, Graphite</p>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center">
                        <div style="width: 50px;">
                          <h5 class="fw-normal mb-0">1</h5>
                        </div>
                        <div style="width: 80px;">
                          <h5 class="mb-0">$1799</h5>
                        </div>
                        <a href="#!" style="color: #cecece;"><i class="fas fa-trash-alt"></i></a>
                      </div>
                    </div>
                  </div>
                </div> */}

                    </div>
                    <div class="col-lg-5">

                      <div class="card bg-secondary text-white rounded-3">
                        <div class="card-body">
                          <div class="d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">Card details</h5>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                              class="img-fluid rounded-3" style={{ width: "65px" }} alt="Avatar" />
                          </div>

                          <p class="small mb-2">Card type</p>
                          <a href="#!" type="submit" class="text-white"><i
                            class="fab fa-cc-mastercard fa-2x me-2"></i></a>
                          <a href="#!" type="submit" class="text-white"><i
                            class="fab fa-cc-visa fa-2x me-2"></i></a>
                          <a href="#!" type="submit" class="text-white"><i
                            class="fab fa-cc-amex fa-2x me-2"></i></a>
                          <a href="#!" type="submit" class="text-white"><i class="fab fa-cc-paypal fa-2x"></i></a>

                          <form class="mt-4">
                            <div class="form-outline form-white mb-4">
                              <input type="text" id="typeName" class="form-control form-control-lg" size="17"
                                placeholder="Cardholder's Name" />
                              <label class="form-label" for="typeName">Cardholder's Name</label>
                            </div>

                            <div class="form-outline form-white mb-4">
                              <input type="text" id="typeText" class="form-control form-control-lg" size="17"
                                placeholder="1234 5678 9012 3457" minlength="19" maxlength="19" />
                              <label class="form-label" for="typeText">Card Number</label>
                            </div>

                            <div class="row mb-4">
                              <div class="col-md-6">
                                <div class="form-outline form-white">
                                  <input type="text" id="typeExp" class="form-control form-control-lg"
                                    placeholder="MM/YYYY" size="7" minlength="7" maxlength="7" />
                                  <label class="form-label" for="typeExp">Expiration</label>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-outline form-white">
                                  <input type="password" id="typeText" class="form-control form-control-lg"
                                    placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
                                  <label class="form-label" for="typeText">Cvv</label>
                                </div>
                              </div>
                            </div>

                          </form>

                          <hr class="my-2" />

                          <div class="d-flex justify-content-between">
                            <p class="mb-2">Subtotal</p>
                            <p class="mb-2">$4798.00</p>
                          </div>

                          <div class="d-flex justify-content-between">
                            <p class="mb-2">Shipping</p>
                            <p class="mb-2">$20.00</p>
                          </div>

                          <div class="d-flex justify-content-between mb-4">
                            <p class="mb-2">Total(Incl. taxes)</p>
                            <p class="mb-2">$4818.00</p>
                          </div>

                          <button type="button" class="btn btn-dark btn-block btn-lg">
                            <div class="d-flex justify-content-between">
                              {/* <span>$4818.00</span> */}
                              <span>Checkout <i class="fas fa-long-arrow-alt-right ms-2"></i></span>
                            </div>
                          </button>

                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
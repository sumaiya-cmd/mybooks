import "./Slides.css"
export default function Slide() {
    return (
        <div class='container-fluid p-5 w-100 bg-dark'>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators m-2">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row">
                            <div class="col-lg-6 p-5">
                                <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/rockcms/2023-01/it-ends-with-us-blake-lively-2x1-jp-230127-298917.jpg" class="w-100 rounded" style={{ minHeight: "300px", objectFit: "cover" }} alt="pop-1" />
                            </div>
                            <div class="col-lg-6 p-5">
                                <div class="d-none d-md-block text-center">
                                    <h5 class='p-5 text-light fs-1' style={{fontFamily :"Playfair Display"}}>IT ENDS WITH US <br />
                                        <span  style={{fontFamily:"Playfair Display" , fontSize:"20px" ,opacity:"0.5"}}>by Colleen Hoover</span>
                                    </h5>
                                    
                                    <p class='fs-5 fst-italic text-light' style={{fontFamily:"Oregano"}}>It Ends with Us is a book that follows a girl named Lily who has just moved and is ready to start her life after college. Lily then meets a guy named Ryle and she falls for him. As she is developing feelings for Ryle, Atlas, her first love, reappears and challenges the relationship between Lily and Ryle.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-lg-6 p-5">
                                <img src="https://readingwhale.com/wp-content/uploads/2017/07/all-the-light-we-cannot-see.jpg" class="w-100 rounded" style={{ minHeight: "300px", objectFit: "cover" }} alt="pop-1" />
                            </div>
                            <div class="col-lg-6 p-5">
                                <h5 class='p-5 text-light fs-1' style={{fontFamily :"Playfair Display"}}>The Light We Cannot See <br />
                                <span  style={{fontFamily:"Playfair Display" , fontSize:"20px" ,opacity:"0.5"}}>by Anthony Doer</span>
                                </h5>
                                <p class='fs-5 fst-italic text-light'style={{fontFamily:"Oregano"}} >When Marie Laure goes blind, aged six, her father builds her a model of their Paris neighbourhood, so she can memorize it with her fingers and then navigate the real streets..</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-lg-6 p-5">
                                <img src="https://ekn27r2hcs5.exactdn.com/wp-content/uploads/2021/08/Verity-Jasmine.png?strip=all&lossy=1&ssl=1" class="w-100 rounded" style={{ minHeight: "300px", objectFit: "cover" }} alt="pop-1" />
                            </div>
                            <div class="col-lg-6 p-5">
                                <div class="d-none d-md-block text-center">
                                    <h5 class='p-5 text-light fs-1'style={{fontFamily :"Playfair Display"}} >verity <br />
                                    <span  style={{fontFamily:"Playfair Display" , fontSize:"20px" ,opacity:"0.5"}}>by Colleen Hoover</span>
                                    </h5>
                                    <p class='fs-5 fst-italic text-light' style={{fontFamily:"Oregano"}}>Verity focuses on the life of Lowen Ashleigh, a young writer living in New York City struggling for money and not really living the life she envisioned. One day she bumps into a man who will change her life forever in more ways than one.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
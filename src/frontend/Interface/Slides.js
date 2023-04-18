import "./Slides.css"
export default function Slide() {
    return (
        <div class='container-fluid p-5 bg-dark'>
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
                                <img src="https://i.pinimg.com/originals/73/54/ed/7354ed843c4c4f82c330c9e93b1d71e7.jpg" class="w-100 rounded" style={{ minHeight: "300px", objectFit: "cover" }} alt="pop-1" />
                            </div>
                            <div class="col-lg-6 p-5">
                                <div class="d-none d-md-block text-center">
                                    <h5 class='p-5 text-light fs-1'>Book 1</h5>
                                    <p class='fs-5 fst-italic text-light'>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item ">
                        <div class="row">
                            <div class="col-lg-6 p-5">
                                <img src="/images/Web 1920 – 1.png" class="w-100 rounded" style={{ minHeight: "300px", objectFit: "cover" }} alt="pop-1" />
                            </div>
                            <div class="col-lg-6 p-5">
                                <h5 class='p-5 text-light fs-1'>Book 2</h5>
                                <p class='fs-5 fst-italic text-light'>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-lg-6 p-5">
                                <img src="https://2halftruth.files.wordpress.com/2017/03/book-trees-knowledge-life.jpg?w=1272" class="w-100 rounded" style={{ minHeight: "300px", objectFit: "cover" }} alt="pop-1" />
                            </div>
                            <div class="col-lg-6 p-5">
                                <div class="d-none d-md-block text-center">
                                    <h5 class='p-5 text-light fs-1'>Book 3</h5>
                                    <p class='fs-5 fst-italic text-light'>Some representative placeholder content for the first slide.</p>
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

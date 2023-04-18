export default function Cards() {
    return (
        <div class="p-4">
            <div class="bg-dark  rounded-top">
                <div class="card w-100 p-3 pt-1  bg-dark">
                    <div class="p-1 m-5">
                        <img src="/images/b.png" class="card-img-top rounded-circle" style={{ height: "25vh" }} alt="..." />
                    </div>
                    <div class="card-body text-white">
                        <h5 class="card-title">Book Name</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <a href="#" style={{backgroundColor:"#6A4D3A", border:0,borderRadius:0}} class="btn btn-primary w-100 p-2 rounded-bottom">Go somewhere</a>
            </div>
        </div>
    )
}
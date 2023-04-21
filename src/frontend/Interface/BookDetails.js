import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Rating } from '@mui/material';
import Icon from '@mui/icons-material/ShoppingBag';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PauseIcon from '@mui/icons-material/Pause';
import { CardBody } from './UserInterface';
import "./Card.css"


const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

export default function BookDetails() {
    const location = useLocation();
    // Accessing query parameters
    const queryParams = new URLSearchParams(location.search);
    const books = queryParams.get('book'); // Access the 'book' query parameter

    // Accessing state
    const book = location.state?.book; // Access the 'book' state

    // Rest of your code
    console.log("book:", book);

    const [playing, toggle] = useAudio(book.book_sample);

    return (
        <div class="bg-dark container-fluid px-5">
            <div class="container p-5 text-white" style={{textAlign:"justify"}}>
                <div class="text-start w-100 py-5 fw-bold fs-6">
                    <a class="btn text-secondary border-0 border-info border-4 rounded-0 border-bottom">Audio book</a>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div style={{ background: "black", padding: "8vw" }} class="rounded-3 text-center">
                            <div class="rounded-circle p-2 bg-secondary">
                                <img src={book.book_image} class="img-fluid rounded rotate_image" style={{ width: "250px", height: "380px" }} />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="px-5 pt-5 col-lg-12 text-white fs-1 fw-bold">
                            {book.book_title}
                        </div>

                        <div class="px-5 col-lg-12 text-white fs-5 fw-italic">
                            by {book.book_author}
                        </div>

                        <div class="col-lg-12 text-start p-5" style={{ height: "30vh" }}>
                            <div class="px-0 rounded-5">
                                <button class="bg-info m-2 py-2 justify-content-around border-0 w-50 rounded-5" onClick={toggle} id="but1" type="button"><h3 class="fw-bold">Play clip</h3>  {playing ?<PauseIcon fontSize="large"/> : <PlayArrowIcon fontSize="large"/>}</button>
                            </div>

                            <div class="px-0 rounded-5">
                                <button class="bg-success m-2 py-2 border-0 w-50 justify-content-around rounded-5"  id="but1" type="button"><h3 class="fw-bold">Add to cart</h3><Icon fontSize="large"/></button>
                            </div>
                        </div>

                        <div class="px-5 text-white fs-4 fw-italic col-lg-12">
                            <span class="text-secondary fw-bold pe-2">Rating:</span><Rating
                                name=""
                                value={book.book_rating}
                                size="large"
                                // icon={<FavoriteIcon fontSize='large' color='secondary'/>}
                                // onChange={(event, newValue) => {
                                //     setValue(newValue);
                                // }}
                            />
                        </div>

                        <div class="px-5 text-white fs-4 fw-italic col-lg-12">
                            <span class="text-secondary fw-bold pe-2">Genre:</span> {book.genre_names}
                        </div>

                        <div class="px-5 text-white fs-4 fw-italic col-lg-12">
                            <span class="text-secondary fw-bold pe-2">Language:</span> {book.language_names}
                        </div>

                        {/* <div class="px-5 text-white fs-4 fw-italic col-lg-12">
                            <span class="text-secondary fw-bold pe-2">Provider:</span> {book.book_provider}
                        </div> */}

                        <div class="px-5 text-white fs-4 fw-italic col-lg-12">
                            <span class="text-secondary fw-bold pe-2">Price:</span> $20
                        </div>

                    </div>
                    <div class="col-lg-12 py-3">
                        <h1 class="text-center text-uppercase p-3">
                            description
                        </h1>
                        <div>
                            {book.book_description}
                        </div>
                    </div>
                    <div class="col-lg-12 py-5">
                        <h1 class="text-center text-uppercase p-3">
                            You Can Also Explore
                        </h1>
                        <div>
                            <CardBody/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
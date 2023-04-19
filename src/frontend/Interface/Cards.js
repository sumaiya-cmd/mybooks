import "./Card.css"
import { useState,useEffect } from "react";

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

export default function Cards(props) {
    
      
    const [playing, toggle] = useAudio(props.item.book_sample);

    return (
        <div className="box">
            <div class="wrapper">
                <div class="product-img">
                    <img src={props.item.book_image} height="420" width="327" />
                </div>
                <div class="product-info">
                    <div class="product-text">
                        <h1>{props.item.book_title}</h1>
                        <h2>by {props.item.book_author}
                        {
                            Array.apply(null, { length: props.item.book_rating }).map((e, i) => (
                                <span class="fa fa-star checked"></span>
                                
                              ))
                        }
                        </h2>
                        <p>{props.item.book_description.substring(0, 250)}.... </p>
                        
                    </div>
                    <div class="product-price-btn">
                        <button onClick={toggle} id="but1" type="button">{playing ?<i class="ri-pause-circle-fill"></i> : <i class="ri-play-circle-fill"></i>}</button>
                        <button id="but2" type="button">buy now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
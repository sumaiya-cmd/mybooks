import "./Card.css"
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


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
  var navigate = useNavigate()
  const [playing, toggle] = useAudio(props.item.book_sample);
  console.log("item;",props.item);
  return (
      <div class="shell">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="wsk-cp-product">
                <div class="wsk-cp-img">
                  <img src={props.item.book_image} alt="Product" class="img-responsive" />
                </div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>Ethnic</span>
                  </div>
                  <div class="title-product">
                    <h3>{props.item.book_title}</h3>
                  </div>
                  <div class="description-prod">
                    <p>{props.item.book_description.substring(0,70)}...</p>
                  </div>
                  <div class="card-footer">
                    <div class="wcf-left"><span class="price">Rp500.000</span></div>
                    <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}
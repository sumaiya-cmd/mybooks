import "./Card.css"
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Icon from '@mui/icons-material/ShoppingBag';

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
                    <span onClick={toggle}>{playing ? <PauseIcon/> : <PlayArrowIcon />}</span>
                  </div>
                  <div class="title-product">
                    <h3>{props.item.book_title}</h3>
                  </div>
                  <div class="description-prod">
                    <p>{props.item.book_description.substring(0,70)}...</p>
                  </div>
                  <div class="card-footer">
                    <div class="wcf-left"><span class="price">$500.000</span></div>
                    <div class="wcf-right"><a  onClick={() => navigate('/userinterface/bookdetails', { state: { book: props.item } })} class="buy-btn"><Icon /></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
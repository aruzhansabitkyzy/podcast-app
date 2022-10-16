import axios from 'axios';
import {useState} from 'react';

export const Podcast = () => {
    const [podcast, setPodcast] = useState([])
    
    return(
            <div className="podcast">
               <div className="podcast__container">
                   <div className="podcast__img">
                       
                   </div>
                   <div className="podcast__info">
                       <div className="podcast_title"></div>
                       <div className="podcast_author"></div>
                   </div>
               </div>
            </div>
    );
}
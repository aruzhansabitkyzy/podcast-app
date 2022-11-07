import axios from 'axios';
import {useState, useEffect} from 'react';
import '../assets/style/middle.css'

export const Podcast = (props) => {
    let length = props.podcast.audio_length_sec;
    let hour = Math.floor(length / 3600);
    let minutes = Math.floor((length % 3600) / 60);
    let seconds = Math.floor(length % 60);

    var time_format = ((hour) ? hour+":" : '') + ((+minutes < 9) ? '0' + minutes : minutes) +":" + ((+seconds <9) ? '0' + seconds : seconds)
    
    
    return(
        <div  key ={props.podcast.id} className="podcast">
            <div className="div_img">
                <img src={`${props.podcast.image}`} width='100px' height='50px'/> 
            </div>
            <div className='div_title'>
                <p>{props.podcast.title_original}</p>
            </div>
            <div className='div_author'>
                <p>{props.podcast.podcast.publisher_original}</p>
            </div>  
            <div className='div_audio'>
               <p>{time_format}</p>
            </div>
        </div>
        
    );
} 

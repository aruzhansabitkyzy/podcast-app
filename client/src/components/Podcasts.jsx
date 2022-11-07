import {useState} from 'react';
import {Podcast} from '../components/Podcast';
import '../assets/style/middle.css';

export const Podcasts = (props) => {
    let data = props.filteredData;
    return (
        <>
        <br/>
         {data && (
                <div className='set'>
                    {data?.map((podcast) => (
                        <Podcast podcast = {podcast} />
                    ))} 
                </div>
              )}
        </>
    )
}
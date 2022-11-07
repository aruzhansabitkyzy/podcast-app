import {Podcasts } from '../components/Podcasts';
import {SearchForm } from '../components/Search/SearchForm';
import '../assets/style/main.css'
import genres from '../data/genres.json'
import axios from 'axios';
import {useState, useEffect} from 'react'
import instance from '../components/instance';

export const Main = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    

    useEffect(() => {
       const delay = setTimeout(() => {
         search(wordEntered)
       }, 3000)
       return () => clearTimeout(delay);
    }, [wordEntered])
    const search = (word) => {
        console.log('axios');
                    instance.get('/search',
                    {
                        params: {
                            q: word
                        }
                    })
                    .then(res => {
                        setFilteredData(res.data.results);
                        console.log(res.data)
                    })
                    .catch(error => {
                        console.log(error + " er")
                    })
           
   
    }

    const clearSearchBar = () => {
        setWordEntered('')
        setFilteredData([])
    }
    return (
        <div className="main">
            <div className='main-left'>
                    <div className='search'>
                      <SearchForm setWordEntered = {setWordEntered} clearSearchBar={clearSearchBar} wordEntered={wordEntered}/>
                    </div>
                    <div className='title'>
                        <h1>Discover Soul</h1>
                        <select name='genres'> 
                                {genres.map((genre) => (
                                    <option value={`${genre.id}`}>{`${genre.name}`}</option>
                                ))} 
                        </select>
                        
                    </div>
                    <Podcasts filteredData = {filteredData} />
            </div>
            <div className='main-right'>

            </div>
        </div>
    )
}
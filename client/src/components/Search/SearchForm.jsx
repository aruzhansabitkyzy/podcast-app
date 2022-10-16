import axios from 'axios';
import {useState, useRef} from 'react'
import podcasts from '../../data/podcasts.json'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import Close from '@mui/icons-material/Close';


export const SearchForm = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("")
    

    const handleFilter = (event) => {
        const val = event.target.value
        setWordEntered(val)
        console.log(val)
        if(val !== '') {
           const filtered = podcasts.filter(podcast => podcast.name.toLowerCase().includes(val.toLowerCase()))
           setFilteredData(filtered)
        }
        else {
            console.log('there')
            setFilteredData([])
        }
        
    }

    const clearSearchBar = () => {
        setWordEntered('')
        setFilteredData([])
    }


    return (
        <>
           <div className="search-div">
              <input 
                type='text'
                placeholder='Search'
                value = {wordEntered}
                onChange = {handleFilter}
              />
              
           </div>
           {wordEntered != '' ? (
              <CloseIcon style={{"cursor" : "pointer"}} onClick={clearSearchBar}/> 
           ) : ( <SearchIcon/>)} 
           
            
           {filteredData.length != 0 && (
                <div>
                {filteredData.map((item) => (
                    
                    <div key={item.id}>
                        {item.name}
                    </div>
                ))}
            </div>
           )}
           
        </>
    )
}
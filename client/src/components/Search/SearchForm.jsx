import {useState, useRef, useEffect} from 'react'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import {Podcasts} from '../Podcasts'
import '../../assets/style/main.css'

export const SearchForm = (props) => {
    return (
        <>
           <div className="search-div">
              <input 
                type='text'
                placeholder='Search'
                value = {props.wordEntered}
                onChange = {(e) => props.setWordEntered(e.target.value)}
              />
              
           </div>
           {props.wordEntered != '' ? (
              <CloseIcon className='searchIcon' onClick={props.clearSearchBar}/> 
           ) : ( <SearchIcon className='searchIcon'/>)} 

        </>
    )
}
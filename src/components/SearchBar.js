import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton, Icon } from '@mui/material'
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  const inputRef = useRef();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault(); 
    
    if (inputRef.current.value.trim() === ''){
      return;
    }
    navigate(`/search/${inputRef.current.value}`);
    inputRef.current.value = '';
  } 

  return (
    <Paper onSubmit={handleSearch} component={"form"} sx={{borderRadius: 20, border: '1px solid #e3e3e3', pl: 2, boxShadow: 'none', mr: { sm: 5}}}>
      <input ref={inputRef} className="search-bar" placeholder='Search...' defaultValue="" onChange={() => {}} />
      <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
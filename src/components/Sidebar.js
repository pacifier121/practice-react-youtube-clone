import React from 'react'
import { Stack } from '@mui/system';
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
    const changeSelectedCategory = (name) => {
        setSelectedCategory(name);
    }

  return (
     <Stack direction="row" sx={{ overflowY: "auto", height: { sx : 'auto', md: '95%' }, flexDirection: { md: "column" }}}>
        {categories.map((category) => (
            <button onClick={() => changeSelectedCategory(category.name)}
             key={category.name} className="category-btn" style={{ color: 'white', background: category.name === selectedCategory && '#FC150C' }}>
               <span style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px' }}>{category.icon}</span> 
               <span style={{ opacity: category.name === selectedCategory ? '1': '0.8' }}>{category.name}</span> 
            </button>    
        ))}
     </Stack>
  )
}

export default Sidebar;
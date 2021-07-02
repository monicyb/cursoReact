import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategoria = ({ setCategories }  ) => {
    const  [inputValue, setInputValue] = useState('');

    const handleInputChange =(e)=>{
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
     
      //setcategorieshace un callback por l o  que puede ver el estado anterior
      if (inputValue.trim().length>1) {
        setCategories(cats => [inputValue, ...cats ]);
        setInputValue('');
      }
      
    };

    return (
        <form onSubmit = {handleSubmit}>            
            <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            ></input>
            <h2>AddCategoria</h2>
        </form>
    )
}

AddCategoria.propTypes = {
    setCategories: PropTypes.func.isRequired
}
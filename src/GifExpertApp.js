import React, { useState } from 'react';
import { AddCategoria } from './components/AddCategoria';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
//const categorias = ['One Punch','Samuray X', 'Sailor Moon'];
const [categorias, setCategorias] = useState (['One Punch']);

//const handleAdd = () => {
 //   setCategorias( cats => [...categorias, ' primera prueba ']);
   
//};


return(
    <>
    <h2>GifExpertApp</h2>
    <AddCategoria  setCategories = { setCategorias }/>
    <hr></hr>
    
    <ol>
        { categorias.map(categorias => 
        <GifGrid key = {categorias} category = {categorias}/> ) }
    </ol>
    </>
);

};

export default GifExpertApp;
import React from 'react'
import { useFetchGrid } from '../hooks/useFetchGrid';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

 //const [images, setimages] = useState([])
// useEffect ( () => {
//     getGifs ( category ).then(imgs => setimages(imgs));
//    },[ category ]);

 const {data: images , loading} = useFetchGrid(category);
  // otra forma ---- images.map(image => <li key={image.id}>{image.title}</li>)
  
    return (
        <>
        <h3 className="animate__bounceInDown">{category}</h3>
        {loading && <p>Loading</p> }

        <div className = "cardGrid">
            
            
                {
                 images.map(img => (
                     <GifGridItem 
                     key={img.id} 
                     {...img}/>
                    )) 
                }            
        </div>
        </>
    )
}

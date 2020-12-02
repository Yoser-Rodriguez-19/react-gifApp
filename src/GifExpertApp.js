import React, { useState } from 'react' // el esnipet rafc es para crear la estructura de el componente
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategories( cats => [...cats, 'HunterXhunter']);

    // }




    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={ setCategories } />

            <hr/>

          
            <ol>
                
                { // el map es para recorrer todo un arreglo, transformarlos y que regrese algo
                    categories.map( category => (
                        
                        <GifGrid 
                                key={ category }
                            
                                category={ category } 
                            />
                      )  )
                }
            </ol>

         
        </>
    );
}

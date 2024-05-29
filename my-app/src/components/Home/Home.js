import { useEffect,useContext } from 'react';
import React from 'react'
import List_prod from './List_prod.js';
import Carousel from './Carousel.js'
import { Context } from '../../context/context.js';
import {fetchDataFromApi} from '../../context/API.js';


export default function Home(){
    useEffect(()=>{
        getProduct();
        getCarousel();
    },[]);
    const {product,setProduct}=useContext(Context);
    const {carousel,setCarousel}=useContext(Context);
    const getProduct=()=>{
        fetchDataFromApi('/api/products?populate=*').then((resp)=> {setProduct(resp);});
    };
    const getCarousel=()=>{
        fetchDataFromApi('/api/carousels?populate=*').then((e)=> {console.log(e);setCarousel(e);});
    }
    return(
        <>
            <Carousel carousel={carousel}/>
            <List_prod product={product}/>
        </>
    )
}
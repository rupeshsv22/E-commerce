
import axios from 'axios';
import './App.css';
import Category from './Category';
import { use, useEffect, useState } from 'react';

function App() {

//use state

let [finalCategory,setfinalCategory]=useState([])
let [allproductlist,setallProductlist]=useState([]);
let [catname,setcatName]=useState('');


let getCategory=()=>{
    axios.get('https://dummyjson.com/products/category-list')
    .then((Res)=>Res.data)
    .then((Response)=>{
      setfinalCategory(Response);
    })
}

let getallProductlist=()=>{
  axios.get('https://dummyjson.com/products')
  .then((Res)=>Res.data)
  .then((Response)=>{
    setallProductlist(Response.products);
  })
}


//useeffect hooks
useEffect(()=>{
  getCategory();
  getallProductlist();
},[]);


useEffect(()=>{
 if(catname !==""){
 console.log('catname',catname);
 axios.get(`https://dummyjson.com/products/category/${catname}`)
  .then((Res)=>Res.data)
  .then((Response)=>{
    setallProductlist(Response.products);
  })
 }
},[catname]);



//fuction
let displayProduct=allproductlist.map((product,item)=>{
  return <ProductDetail product={product} key={item}/>
});


  return (
    <>
     <div className='py-[40px]'>

      <div className='max-w-[1320px] mx-auto'>
        <h1 className='text-center text-[40px] font-bold font-ul mb-[30px]'>Our Product</h1>
        <div className='grid grid-cols-[30%_auto] gap-[20px]'>
          <div className='bg-[#aea9a9]'>

          <Category finalCategory={finalCategory} setcatName={setcatName}/>

          </div>

          <div className='bg-[#f2f2f2]'>
            <div className='grid grid-cols-3 gap-5'>
            {

            allproductlist.length >= 1 ? displayProduct :'No Product found'

            }
            </div>
          </div>
      
        </div>

      </div>

    </div>
    </>
   
  );
}

export default App;


// function to display product details
function ProductDetail({product}) {
  return (
    <div className='shadow-lg text-center pb-4 '>
                <img src={product.thumbnail} alt="" className='w-[100] h-[220px] '/>
                <h4>{product.title}</h4>
                <b>{product.price}</b>
              </div>
  );
}

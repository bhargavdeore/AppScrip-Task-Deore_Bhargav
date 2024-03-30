import React, { useState } from 'react';
import Recommended from './Recommended';

import Aside from './aside';
import './filter.css'
import ProductCards from './ProductCards';



function DropdownMenu() {
  
 
  

  
  const [showData, setShowData]=useState(false)


const toggleData =()=>{

  setShowData(prevState => !prevState);
  
}

  return (
   <>
    <div className='app'>
      <a href="#" onClick={toggleData} className='ms-5 text-secondary '>
      {showData ? "Hide Data" : "Show Data"} 
      </a> 
      <Recommended/>
      <hr />
      <br />
      <div className='contain'>
      {
        showData && <Aside/>
      }
      <div className={showData? 'content with-aside' : 'content'}>
        <ProductCards/>
        </div>
      
      </div>
      
    </div>
   </>
  );
}


export default DropdownMenu;






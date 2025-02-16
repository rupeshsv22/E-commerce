import React from 'react'

/**
 * Renders a Category component.
 * This component is currently empty and serves as a placeholder for category-related content.
 * 
 * @returns {JSX.Element} An empty div element representing the Category component.
 */
export default function Category({finalCategory,setcatName}) {
  let cat =finalCategory.map((v,i)=>{
    return <li onClick={()=>setcatName(v)} key='i' className='bg-[#ccc] p-[7px] cursor-pointer text-[20px] font-serif font-[500] mb-2'>{v}</li>
  })
  return (
    <div>
        <h3 className='text-[25px]  font-[500] p-[10px]'>Product Category</h3>

        <ul>
          {cat}
        </ul>
    </div>
  )
}


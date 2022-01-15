import React from 'react';

export default function Navigation({currentPage, setCurrentPage}) {
  const pages = ['About Me', 'Projects', 'Contact'];

  return (
    <nav>
      <ul className=''>
        {
        pages.map((page, index) => 
          (page === currentPage) ?
          <li key={index}><button onClick={()=>setCurrentPage(page)} className=''>
            {page}
          </button></li> :
          <li key={index}><button onClick={()=>setCurrentPage(page)} className=''>
          {page}
        </button></li>
        )}
      </ul>
    </nav>
  )
} 
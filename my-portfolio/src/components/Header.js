import React from 'react';
import Navigation from './Navigation'

function Header({currentPage, setCurrentPage}) {

  return (
    <header style={{backgroundImage: "url('')" }} className="">
      <div className=''>
        <h1 className=''>Cameron White</h1>
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
    </header>
  );
}

export default Header; 
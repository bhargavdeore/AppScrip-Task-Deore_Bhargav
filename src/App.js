import React from 'react';
import NavbarSection from './Navbar';
import Homepage from './Homepage';
import Footer from './responsiveFooter';


const App = () => {
  return (
    <div className='container-fluid'>
      <NavbarSection />
      <Homepage />
      <Footer />
    </div>
  );
};

export default App;
        
 
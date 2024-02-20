import React from 'react';
import Info from './components/Info';
import QuickLinks from './components/QuickLinks';
import Description from './components/Description';
import Footer from './components/Footer';


function App(){
    return(
        <div className='main'>
            <div>
               <Info/>
               <QuickLinks/>
               <Description/>
               <Footer/>
            </div>
            
        </div>
    )
}





export default App;
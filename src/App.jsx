import React from 'react';
import Info from './components/Info';
import QuickLinks from './components/QuickLinks';
import Description from './components/Description';
import Footer from './components/Footer';


function App(){
    return(
        <div className='main'>
            <Info/>
            <QuickLinks/>
            <Description/>
            <Footer/>
        </div>
    )
}





export default App;
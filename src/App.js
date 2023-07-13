import React from 'react';
import Dropdown from './components/Dropdown';
import "./App.css";

const App=()=>{
    const dropdownItems=['Yes','Probably Not','Maybe later','Not required','Default','Auto Select'];

    return(
        <div className="App">
            <Dropdown items={dropdownItems}/>
        </div>
    );
};

export default App;
 import React from 'react'
import{ BsSearch, BsJustify} from 'react-icons/bs'
import{ PiHandWavingDuotone} from 'react-icons/pi'

 function Header(){
    return(
        <div className='header'>
            <div className='menu-icon'>
                <BsJustify className='icon' />
            </div>
            <div className='header-left'>
                <h4>Hello Kartik<PiHandWavingDuotone className='hand'/>,</h4>
            </div>
            <div className='header-right'>
                <BsSearch className='search'/>Search
            </div>
           
        </div>
    );
 }

 export default Header
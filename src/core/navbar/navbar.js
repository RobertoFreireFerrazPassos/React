import { useState } from 'react';
import Option from './option/option';
import DropdownOption from './dropdownOption/dropdownOption';

import './navbar.css'

function NavLeftBar(){
    const navBarOptions = [
        { 
            active : true,
            value : "Report",
            redirectEndpoint : "Report"
        },
        { 
            active : false,
            value : "Tasks",
            redirectEndpoint : "Tasks",
            dropdownOptions: [
                {
                    active : false,
                     value : "Task",
                    redirectEndpoint : "Task"
                },
                {
                    active : false,
                     value : "Calender",
                    redirectEndpoint : "Calender"
                }
            ]
        },        
        { 
            active : false,
            value : "Configuration",
            redirectEndpoint : "Configuration"
        }
    ];
    
    const [options, setOptions ] = useState(navBarOptions);

    return <div className="navbar">            
        <ul>
            { options.map(option => {
                if (option.dropdownOptions && option.dropdownOptions.length > 0){
                    return <DropdownOption option={option}></DropdownOption>
                }
                    return  <Option active={option.active} option={option}></Option>;
               })
            }            
        </ul>
    </div>;
}

export default NavLeftBar;
import { useState } from 'react';
import Classes from '../../../shared/utils/classes';
import Options from '../option/option';

import './dropdownOption.css';

function DropdownOption(props){

    const [option, setOption ] = useState(props.option);
    const [isActive, setActive ] = useState(false);

    function toggleDropDown(){
        setActive(!isActive);
    }

    return (
        <div>
            <button onClick={toggleDropDown} className={Classes.setActiveAndAditionalClasses(option, "dropdown-btn")}> 
                { option.value }
                <i className="fa fa-caret-down"></i>
            </button>                
            <div className="dropdown-container" style={isActive ? {display : "block"} : {display : "none"}}>
                <li>  
                    { 
                        option.dropdownOptions.map(dropdownItem => {
                            return <Options key={dropdownItem.value} option = {dropdownItem}></Options>
                        })
                    }
                </li>
            </div>
        </div>
    );
} 

export default DropdownOption;

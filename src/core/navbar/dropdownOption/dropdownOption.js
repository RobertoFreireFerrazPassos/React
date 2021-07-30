import { useState } from 'react';

import Classes from '../../../shared/utils/classes';
import Options from '../option/option';
import Wrapper from '../../../shared/components/wrapper/wrapper';

import './dropdownOption.css';

function DropdownOption(props){
    const [option, setOption ] = useState(props.option);
    const [isActive, setActive ] = useState(false);

    function toggleDropDown(){
        setActive(!isActive);
    }

    let classArrow = isActive ? "fa fa-caret-up" : "fa fa-caret-down"; 

    return (
        <Wrapper>
            <button onClick={toggleDropDown} className={Classes.setActiveAndAditionalClasses(option, "dropdown-btn")}> 
                { option.value }
                <i className={classArrow}></i>
            </button>
            { isActive &&
                <li className="dropdown-container">
                    { 
                        option.dropdownOptions.map(dropdownItem => {
                            return <Options key={dropdownItem.id} active={dropdownItem.active} option = {dropdownItem}></Options>
                        })
                    }
                </li>
            }                
        </Wrapper>
    );
} 

export default DropdownOption;

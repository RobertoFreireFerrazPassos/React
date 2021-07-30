import { useState } from 'react';

import Classes from '../../../shared/utils/classes';
import Options from '../option/option';
import Wrapper from '../../../shared/utils/wrapper';

import './dropdownOption.css';

function DropdownOption(props){
    const [option, setOption ] = useState(props.option);
    const [isActive, setActive ] = useState(false);

    function toggleDropDown(){
        setActive(!isActive);
    }

    return (
        <Wrapper>
            <button onClick={toggleDropDown} className={Classes.setActiveAndAditionalClasses(option, "dropdown-btn")}> 
                { option.value }
                <i className="fa fa-caret-down"></i>
            </button>
            { isActive &&
                <div className="dropdown-container">
                    <li>  
                        { 
                            option.dropdownOptions.map(dropdownItem => {
                                return <Options key={dropdownItem.id} active={dropdownItem.active} option = {dropdownItem}></Options>
                            })
                        }
                    </li>
                </div>
            }                
        </Wrapper>
    );
} 

export default DropdownOption;

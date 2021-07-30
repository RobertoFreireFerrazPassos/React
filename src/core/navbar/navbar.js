import { useState } from 'react';

import Option from './option/option';
import DropdownOption from './dropdownOption/dropdownOption';
import { NavBarService } from './navBarService';

import './navbar.css';

function NavLeftBar(){
    const [options, setOptions ] = useState(NavBarService.getNavBarOptions());

    const subscritionNavBarService = NavBarService.onChanges().subscribe((navBarOptions)=>{
        setOptions(navBarOptions);
    });

    return <div className="navbar">            
        <ul>
            { options.map(option => {
                if (option.dropdownOptions && option.dropdownOptions.length > 0){
                    return <DropdownOption key={option.id} option={option}></DropdownOption>
                }
                    return  <Option key={option.id} active={option.active} option={option}></Option>;
               })
            }            
        </ul>
    </div>;
}

export default NavLeftBar;
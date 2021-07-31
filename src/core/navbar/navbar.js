import { Component } from 'react';

import Option from './option/option';
import DropdownOption from './dropdownOption/dropdownOption';
import { NavBarService } from './navBarService';

import './navbar.css';

class NavLeftBar extends Component {
    constructor(){
        super();
        this.state = {
            options : NavBarService.getNavBarOptions()
        }

        this.subscritionNavBarService = NavBarService.onChanges().subscribe((navBarOptions)=>{
            this.setState({
                options : navBarOptions
            });
        });
    }

    componentWillUnmount(){
        this.subscritionNavBarService.unsubscribe();
    }

    render(){
        return (
            <div className="navbar">            
                <ul>
                    { this.state.options.map(option => {
                        if (option.dropdownOptions && option.dropdownOptions.length > 0){
                            return <DropdownOption key={option.id} option={option}></DropdownOption>
                        }
                            return  <Option key={option.id} active={option.active} option={option}></Option>;
                    })
                    }            
                </ul>
            </div>
        )
    }
}

export default NavLeftBar;
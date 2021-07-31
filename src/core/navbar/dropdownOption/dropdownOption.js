import { Component } from 'react';

import Classes from '../../../shared/utils/classes';
import Options from '../option/option';
import Wrapper from '../../../shared/components/wrapper/wrapper';

import './dropdownOption.css';

class DropdownOption extends Component {
    constructor(props){
        super(props);
        this.state = {
            option : this.props.option,
            isActive : false,
            classArrow : "fa fa-caret-down"
        };
    }

    toggleDropDown = () => {
        this.setState((currentState) => {
            return {
                isActive : !currentState.isActive,
                classArrow : currentState.isActive ? "fa fa-caret-up" : "fa fa-caret-down"
            }
        });
    }

    render(){
        return (
            <Wrapper>
                <button onClick={this.toggleDropDown} className={Classes.setActiveAndAditionalClasses(this.state.option, "dropdown-btn")}> 
                    { this.state.option.value }
                    <i className={this.state.classArrow}></i>
                </button>
                { this.state.isActive &&
                    <li className="dropdown-container">
                        { 
                            this.state.option.dropdownOptions.map(dropdownItem => {
                                return <Options key={dropdownItem.id} active={dropdownItem.active} option = {dropdownItem}></Options>
                            })
                        }
                    </li>
                }                
            </Wrapper>
        );
    }
} 

export default DropdownOption;

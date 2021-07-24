import Dropdown from './dropdown/dropdown';

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

    return <div className="navbar">            
        <ul>
            { navBarOptions.map(option => {
               return  renderNavBarOption(option)
            })}
        </ul>
    </div>;
}

function renderNavBarOption(option){
    if (option.dropdownOptions && option.dropdownOptions.length > 0){
        return (
            <div>
                <button className={setActiveAndAditionalClasses(option, "dropdown-btn")}> 
                    { option.value }
                    <i className="fa fa-caret-down"></i>
                </button>                
                <div className="dropdown-container">
                    <li>  
                        { 
                            option.dropdownOptions.map(dropdownItem => {
                                return <Dropdown dropdownOption = {dropdownItem}></Dropdown>
                            })
                        }
                    </li>
                </div>
            </div>
            );
    }
    
    return  <li><a className={setActiveAndAditionalClasses(option)} href={`#${option.redirectEndpoint}`}>{option.value}</a></li>;
}

function setActiveAndAditionalClasses(option, aditionalClasses){
    if (aditionalClasses) return `${aditionalClasses} ${option.active ? "active" : ""}`;
    return `${option.active ? "active" : ""}`;
}

export default NavLeftBar;
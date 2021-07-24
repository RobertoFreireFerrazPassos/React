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
            redirectEndpoint : "Tasks"
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
    return  <li><a className={`${option.active ? "active" : ""}`} href={`#${option.redirectEndpoint}`}>{option.value}</a></li>;
}

export default NavLeftBar;
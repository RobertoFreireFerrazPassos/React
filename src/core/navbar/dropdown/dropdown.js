import './dropdown.css';

function Dropdown(props){
    return (
        <a href={`#${props.dropdownOption.redirectEndpoint}`}> {props.dropdownOption.value}</a>
    );
} 

export default Dropdown;

import Classes from '../../../shared/utils/classes';

function Option(props){
    return (
        <a className={Classes.setActiveAndAditionalClasses(props.active, props.aditionalClasses)} href={`#${props.option.redirectEndpoint}`}>{props.option.value}</a>
    );
} 

export default Option;
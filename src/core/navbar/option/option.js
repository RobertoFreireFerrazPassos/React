import Classes from '../../../shared/utils/classes';
import { NavBarService } from '../navBarService';

function Option(props){
    function optionClicked(){   
        NavBarService.setNewActive(props.option.id);
    }
    return (
        <a onClick={optionClicked} className={Classes.setActiveAndAditionalClasses(props.active, props.aditionalClasses)} href={`#${props.option.redirectEndpoint}`}>{props.option.value}</a>
    );
} 

export default Option;
import Classes from '../../../shared/utils/classes';
import { NavBarService } from '../navBarService';
import { ModuleSelectionService } from '../../../modules/moduleSelectionService';

function Option(props){
    function optionClicked(){   
        ModuleSelectionService.selectModule(props.option.componentIdentifier);        
        NavBarService.setNewActive(props.option.id);
    }
    return (
        <a onClick={optionClicked} className={Classes.setActiveAndAditionalClasses(props.active, props.aditionalClasses)} href={`#${props.option.redirectEndpoint}`}>{props.option.value}</a>
    );
} 

export default Option;
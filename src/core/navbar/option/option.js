import { Component } from 'react';

import Classes from '../../../shared/utils/classes';
import { NavBarService } from '../navBarService';
import { ModuleSelectionService } from '../../../modules/moduleSelectionService';

class Option extends Component {

    optionClicked = () => {      
        ModuleSelectionService.selectModule(this.props.option.componentIdentifier);        
        NavBarService.setNewActive(this.props.option.id);
    }

    render(){
        return <a onClick={this.optionClicked} className={Classes.setActiveAndAditionalClasses(this.props.active, this.props.aditionalClasses)} href={`#${this.props.option.redirectEndpoint}`}>{this.props.option.value}</a>
    };
} 

export default Option;
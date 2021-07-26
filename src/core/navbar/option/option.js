import { useState } from 'react';

import Classes from '../../../shared/utils/classes';
import { NavBarService } from '../navBarService';

function Option(props){
    const subscritionNavBarService = NavBarService.getNavBarService();
    const [active, setActive ] = useState(props.active);
    let currentActive = false;

    subscritionNavBarService.subscribe(()=>{
        if (!currentActive){
            setActive(false);
        } else {
            setActive(true);
        }
    });

    function OptionClicked(){     
        currentActive = true;
        NavBarService.clearActive();
    }
    return (
        <a onClick={OptionClicked} className={Classes.setActiveAndAditionalClasses(active, props.aditionalClasses)} href={`#${props.option.redirectEndpoint}`}>{props.option.value}</a>
    );
} 

export default Option;
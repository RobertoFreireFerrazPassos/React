import { Subject } from 'rxjs';

const subject = new Subject();
const childKey = "dropdownOptions";
const idKey = "id";
const navBarOptions = [
    { 
        active : false,
        id : "Report",
        value : "Report",
        redirectEndpoint : "Report",
        componentIdentifier : "REPORT"
    },
    { 
        active : false,
        value : "Tasks",
        id : "Tasks",
        redirectEndpoint : "Tasks",
        dropdownOptions: [
            {
                active : false,
                value : "Task",
                id : "Tasks.Task",
                redirectEndpoint : "Task",                
                componentIdentifier : "TASK"
            },
            {
                active : false,
                value : "Calender",
                id : "Tasks.Calender",
                redirectEndpoint : "Calender",                
                componentIdentifier : "CALENDER"
            }
        ]
    },        
    { 
        active : false,
        value : "Configuration",
        id : "Configuration",
        redirectEndpoint : "Configuration",                
        componentIdentifier : "CONFIGURATION"
    }
];

function setActiveOption(id){
    const path = id.split(".");

    clearAllOptions(navBarOptions);

    let optionToSetActive = navBarOptions;
    path.forEach((level, i) => {
        optionToSetActive = optionToSetActive.find(option => {
            const iterationPath = option[idKey].split(".");
            return iterationPath[iterationPath.length-1] === level;
        });
        if (i !== path.length -1)  {
            optionToSetActive = optionToSetActive[childKey];
        } 
    });

    optionToSetActive.active = true;
}

function clearAllOptions(list){
    (list || []).forEach(option => {
        option.active = false;
        if (option[childKey]){
            clearAllOptions(option[childKey]);
        }
    });
}

export const NavBarService = {
    setNewActive: (id) => { setActiveOption(id); subject.next(); },
    onChanges: () => subject.asObservable(),
    getNavBarOptions: () => [...navBarOptions]
};

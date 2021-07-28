import { Subject } from 'rxjs';

import Report from './Report/report';
import Task from './Tasks/Task/task';
import Calender from './Tasks/Calender/calender';
import Configuration from './Configuration/configuration';

const subject = new Subject();

let modules = {
    "REPORT" : Report,
    "TASK" : Task,
    "CALENDER" : Calender,
    "CONFIGURATION" : Configuration
}

let moduleSelected = Report;

function selectModule(identifier){
    moduleSelected = modules[identifier]
}

export const ModuleSelectionService = {
    selectModule: (identifier) => { selectModule(identifier); subject.next(); },
    onChanges: () => subject.asObservable(),
    getModuleSelection: () => moduleSelected
};
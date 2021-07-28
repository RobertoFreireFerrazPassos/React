import { Subject } from 'rxjs';
import Tasks from '../../../modules/Tasks/task';
import Report from '../../../modules/Report/report';

const subject = new Subject();

let modules = {
    "REPORT" : Report,
    "TASKS" : Tasks
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
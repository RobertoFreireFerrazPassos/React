import { Subject } from 'rxjs';
import Tasks from './Tasks/task';
import Report from './Report/report';

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
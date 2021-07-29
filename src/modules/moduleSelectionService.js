import { Subject } from 'rxjs';

const subject = new Subject();

let moduleSelected = "";

export const ModuleSelectionService = {
    selectModule: (identifier) => { moduleSelected = identifier; subject.next(moduleSelected); },
    onChanges: () => subject.asObservable()
};
import { Subject } from 'rxjs';

const subject = new Subject();

export const ModuleSelectionService = {
    selectModule: (identifier) => { subject.next(identifier); },
    onChanges: () => subject.asObservable()
};
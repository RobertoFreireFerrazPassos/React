import { Subject } from 'rxjs';

const subject = new Subject();

export const NavBarService = {
    clearActive: () => { subject.next() },
    getNavBarService: () => subject.asObservable()
};

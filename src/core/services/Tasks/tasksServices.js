import { Subject } from 'rxjs';

const subject = new Subject();

let tasks = [];

const addTask = (task) => {
    tasks.push(task);
};

export const TasksService = {
    addNewTask: (task) => { addTask(task); subject.next(); },
    onChanges: () => subject.asObservable(),
    getTasks: () => [...tasks]
};
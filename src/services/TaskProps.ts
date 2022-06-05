export interface TaskInter {
	sN?: string;
	id: string;
	name: string;
	isCompleted: boolean;
}

export enum filtering {
	all = "all",
	active = "active",
	completed = "completed",
}

export interface TaskContextInter {
	taskList: TaskInter[];
	filter: filtering;
	changeFilter: (filterOrder: filtering) => void;
	getTask: () => void;
	createTask: (task: TaskInter) => void;
	deleteTask: (sN: string) => void;
	editTask: (sN: string, updateName: string) => void;
	checkTask: (sN: string) => void;
}

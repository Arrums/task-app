import React, { createContext, useState } from "react";
import {
	getTasks,
	createTask,
	deleteTaskCall,
	editTaskCall,
	checkTaskCall,
} from "./server";
import { TaskInter, filtering, TaskContextInter } from "./TaskProps";

//initial value
export const TaskContext = createContext<TaskContextInter>({
	taskList: [],
	filter: filtering.all,
	changeFilter: (filterOrder: filtering) => {},
	getTask: () => {},
	createTask: (task: TaskInter) => {},
	deleteTask: (sN: string) => {},
	editTask: (sN: string, updateName: string) => {},
	checkTask: (sN: string) => {},
});

interface contextProps {
	children: React.ReactNode;
}

const TaskContextProvider: React.FC<contextProps> = ({ children }) => {
	//set up state for to do object
	const [tasks, setTasks] = useState<TaskInter[]>([]);

	//set up state for filtering to do
	const [filterOrder, setFilterOrder] = useState<filtering>(filtering.all);

	const filterHandler = (filterOrder: filtering) => {
		setFilterOrder(filterOrder);
	};

	//read
	const getTaskHandler = async () => {
		const uploadedTasks = await getTasks();
		setTasks(uploadedTasks);
	};

	//create
	const createTaskHandler = async (task: TaskInter) => {
		await createTask({ ...task });

		const newTask: TaskInter = { ...task };

		setTasks((prevTask) => {
			return prevTask.concat(newTask);
		});
	};

	//delete
	const deleteTaskHandler = async (sN: string) => {
		await deleteTaskCall(sN);
		setTasks((prevTask) => {
			return prevTask.filter((task) => task.sN !== sN);
		});
	};

	//update
	const editTaskHandler = async (sN: string, newName: string) => {
		const targetIndex = tasks.findIndex((task) => task.sN === sN);
		const targetTask = tasks[targetIndex];
		const editTask: TaskInter = { ...targetTask, name: newName };
		let editTasks = [...tasks];
		editTasks[targetIndex] = editTask;
		setTasks(editTasks);
		await editTaskCall(sN, newName);
	};

	const checkTaskHandler = async (sN: string) => {
		const targetIndex = tasks.findIndex((task) => task.sN === sN);
		const targetTask = tasks[targetIndex];
		const editTask: TaskInter = {
			...targetTask,
			isCompleted: !targetTask.isCompleted,
		};
		let editTasks = [...tasks];
		editTasks[targetIndex] = editTask;
		setTasks(editTasks);
		await checkTaskCall(sN, !targetTask.isCompleted);
	};

	const toDoContextValue: TaskContextInter = {
		taskList: tasks,
		filter: filterOrder,
		changeFilter: filterHandler,
		getTask: getTaskHandler,
		createTask: createTaskHandler,
		deleteTask: deleteTaskHandler,
		editTask: editTaskHandler,
		checkTask: checkTaskHandler,
	};

	return (
		<TaskContext.Provider value={toDoContextValue}>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskContextProvider;

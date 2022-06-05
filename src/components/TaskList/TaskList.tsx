import { useContext, useEffect } from "react";
import { TaskContext } from "../../services/TaskHandler";
import { filtering, TaskInter } from "../../services/TaskProps";
import TaskCard from "../TaskCard";
import styles from "./TaskList.module.scss";

const TaskList: React.FC = () => {
	//setting state using context
	const taskCtx = useContext(TaskContext);
	const taskList = taskCtx.taskList;
	const filterOrder = taskCtx.filter;
	const getTask = taskCtx.getTask;

	//should I call the get task in here or in input box?
	useEffect(() => {
		getTask();
	}, []);

	// Using index as key because of id & sn unstable

	const allToDos =
		filterOrder === filtering.all &&
		taskList.map((task, index) => <TaskCard key={index} task={task} />);

	const completedToDos =
		filterOrder === filtering.completed &&
		taskList
			.filter((task) => task.isCompleted === true)
			.map((task, index) => <TaskCard key={index} task={task} />);

	const activeToDos =
		filterOrder === filtering.active &&
		taskList
			.filter((task) => task.isCompleted === false)
			.map((task, index) => <TaskCard key={index} task={task} />);

	return (
		<section className={styles.ToDos}>
			{allToDos}

			{completedToDos}

			{activeToDos}
		</section>
	);
};

export default TaskList;

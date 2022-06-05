import { useContext } from "react";
import { TaskContext } from "../../services/TaskHandler";
import { filtering } from "../../services/TaskProps";
import styles from "./TaskFilter.module.scss";

const TaskFilter = () => {
	const taskCtx = useContext(TaskContext);
	const changeFilter = taskCtx.changeFilter;
	const filterOrder = taskCtx.filter;

	const changeFilterOrder = (filter: filtering) => {
		changeFilter(filter);
	};

	return (
		<ul className={styles.ToDoFilter}>
			<li onClick={changeFilterOrder.bind(null, filtering.all)}>
				<a
					className={
						filterOrder === filtering.all ? styles.ToDoFilter__Active : ""
					}
					href="#">
					View All
				</a>
			</li>

			<li onClick={changeFilterOrder.bind(null, filtering.active)}>
				<a
					className={
						filterOrder === filtering.active ? styles.ToDoFilter__Active : ""
					}
					href="#">
					Active
				</a>
			</li>

			<li onClick={changeFilterOrder.bind(null, filtering.completed)}>
				<a
					className={
						filterOrder === filtering.completed ? styles.ToDoFilter__Active : ""
					}
					href="#">
					Completed
				</a>
			</li>
		</ul>
	);
};

export default TaskFilter;

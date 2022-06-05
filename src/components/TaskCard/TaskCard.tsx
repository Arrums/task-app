import React, { useContext, useState } from "react";
import { TaskInter } from "../../services/TaskProps";
import styles from "./TaskCard.module.scss";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { TaskContext } from "../../services/TaskHandler";

interface cardProps {
	task: TaskInter;
}

const TaskCard: React.FC<cardProps> = ({ task }) => {
	const [taskName, setTaskName] = useState<string>(task.name);

	const [editMode, setEditMode] = useState<boolean>(false);

	const taskCtx = useContext(TaskContext);
	const deleteTask = taskCtx.deleteTask;
	const checkTask = taskCtx.checkTask;
	const editTask = taskCtx.editTask;

	const handleDone = () => {
		checkTask(task.sN!);
		console.log(task.sN);
	};

	const handleDelete = () => {
		deleteTask(task.sN!);
	};

	const handleSaveEditTask = () => {
		editTask(task.sN!, taskName);
		setEditMode(false);
	};

	const HandleEnterPress = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			handleSaveEditTask();
			setEditMode(false);
			return;
		}
	};

	const toDo_completed = task.isCompleted ? styles["Card__Completed"] : "";

	const toDo_editMode = editMode ? styles["Card__EditMode"] : "";

	const hide = editMode ? styles.hide : "";

	return (
		<form className={`${styles.Card} ${toDo_completed} ${toDo_editMode}`}>
			<div className={styles.Card__Cell}>
				<button
					className={`${styles.Card__Cell__Icon} ${styles.checkIcon} ${hide}`}
					onClick={handleDone.bind(null, task.id)}>
					<FaCheckCircle />
				</button>
			</div>
			<div className={styles.Card__Cell}>
				{!editMode && <div className={styles.Card__Cell__Text}>{taskName}</div>}
				{editMode && (
					<input
						onKeyDown={HandleEnterPress}
						className={styles.Card__Cell__Input}
						type="text"
						value={taskName}
						onChange={(e) => setTaskName(e.target.value)}></input>
				)}
			</div>
			<div className={styles.Card__Cell}>
				<button
					className={`${styles.Card__Cell__Icon} ${hide}`}
					onClick={() => setEditMode(true)}>
					<AiFillEdit />
				</button>
				<button
					className={`${styles.Card__Cell__Icon} ${hide}`}
					onClick={handleDelete.bind(null, task.id)}>
					<AiFillDelete />
				</button>
				<button
					className={`${styles.Card__Cell__Icon} ${
						!editMode ? styles.hide : ""
					}`}
					onClick={handleSaveEditTask}>
					<MdClose />
				</button>
			</div>
		</form>
	);
};

export default TaskCard;

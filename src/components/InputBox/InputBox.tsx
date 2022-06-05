import React, { useRef, useContext } from "react";
import { TaskInter } from "../../services/TaskProps";
import { TaskContext } from "../../services/TaskHandler";
import styles from "./InputBox.module.scss";

const InputBox: React.FC = () => {
	const textInput = useRef<HTMLInputElement>(null);

	const taskCtx = useContext(TaskContext);
	const createTask = taskCtx.createTask;

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (textInput.current === null) return;

		//create todo object
		const newTask: TaskInter = {
			id: Date.now().toString(),
			name: textInput.current!.value,
			isCompleted: false,
		};

		createTask(newTask);

		//resetting the input box
		textInput.current.value = "";

		//after submitting the task we will remove the drop shadow
		textInput.current?.blur();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				ref={textInput}
				type="input"
				placeholder="Add a task"
				maxLength={50}
				className={styles.InputBox}
			/>
		</form>
	);
};

export default InputBox;

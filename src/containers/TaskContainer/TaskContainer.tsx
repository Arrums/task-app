import React, { useReducer, useState } from "react";
import styles from "./TaskContainer.module.scss";
import InputBox from "../../components/InputBox";
import TaskList from "../../components/TaskList";
import Footer from "../../components/Footer";
import TaskFilter from "../../components/TaskFilter";

const TaskContainer: React.FC = () => {
	return (
		<>
			<div className={styles.Container}>
				<span className={styles.Container__Heading}>taskapp</span>
				<InputBox />
				<TaskFilter />
				<TaskList />
			</div>
			<Footer />
		</>
	);
};

export default TaskContainer;

import { TaskInter } from "./TaskProps";

export const getTasks = async () => {
	try {
		const response = await fetch(
			"https://taskapp-98ba2-default-rtdb.asia-southeast1.firebasedatabase.app/tasklist.json",
		);

		if (!response.ok) {
			throw new Error("Cannot get the list, please check the database");
		}

		const data = await response.json();

		const uploadedTasks: TaskInter[] = [];

		for (const key in data) {
			uploadedTasks.push({
				sN: key,
				id: data[key].id,
				name: data[key].name,
				isCompleted: data[key].isCompleted,
			});
		}

		return uploadedTasks;
	} catch (error) {
		throw new Error("Cannot get list");
	}
};

export const createTask = async (task: TaskInter) => {
	try {
		const response = await fetch(
			"https://taskapp-98ba2-default-rtdb.asia-southeast1.firebasedatabase.app/tasklist.json",
			{
				method: "POST",
				body: JSON.stringify({ ...task }),
				headers: {
					"Content-type": "application/json",
				},
			},
		);

		if (!response.ok) {
			throw new Error("Failed at creating to do");
		}

		const data = await response.json();

		return data;
	} catch (error) {
		throw new Error("Failed at creating to do");
	}
};

export const deleteTaskCall = async (sN: string) => {
	try {
		const response = await fetch(
			`https://taskapp-98ba2-default-rtdb.asia-southeast1.firebasedatabase.app/tasklist/${sN}.json`,
			{
				method: "DELETE",
			},
		);
		if (!response.ok) {
			throw new Error("Failed at deleting to do");
		}
	} catch (error) {
		throw new Error("Cannot delete to dos");
	}
};

export const editTaskCall = async (sN: string, updateName: string) => {
	try {
		const response = await fetch(
			`https://taskapp-98ba2-default-rtdb.asia-southeast1.firebasedatabase.app/tasklist/${sN}.json`,
			{
				method: "PATCH",
				body: JSON.stringify({ name: updateName }),
			},
		);

		if (!response.ok) {
			throw new Error("Failed at editing to do");
		}
	} catch (error) {
		throw new Error("Failed at editing to dos");
	}
};

export const checkTaskCall = async (sN: string, updateIsCompleted: boolean) => {
	try {
		const response = await fetch(
			`https://taskapp-98ba2-default-rtdb.asia-southeast1.firebasedatabase.app/tasklist/${sN}.json`,
			{
				method: "PATCH",
				body: JSON.stringify({ isCompleted: updateIsCompleted }),
			},
		);

		if (!response.ok) {
			throw new Error("Failed at editing isCompleted");
		}
	} catch (error) {
		throw new Error("Failed at editing isCompleted");
	}
};

import ToDoContainer from "./containers/TaskContainer";
import ToDoContextProvider from "./services/TaskHandler";

const App = () => {
	return (
		<ToDoContextProvider>
			<ToDoContainer />
		</ToDoContextProvider>
	);
};

export default App;

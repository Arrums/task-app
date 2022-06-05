## React Project: Task Application

Task application using firebase realtime database as the backend. The tasks can
be filtered by active and completed. Other features include add new task,
editing task name, mark completed the task, and deleting task.

### ⭐ [Live Project](https://taskapp-98ba2.web.app)

![taskapp](https://user-images.githubusercontent.com/100544967/172051141-c7866729-8951-4ae2-8f92-ac33bef9911b.png)
![active-task](https://user-images.githubusercontent.com/100544967/172051143-674c2b72-3b19-4512-b6bf-3d76a9649a2a.png)
![completed-task](https://user-images.githubusercontent.com/100544967/172051157-f9e6169a-9430-472b-97c4-5e4fb2fa6d81.png)

## Goals

Improving React and Typescript skills and gain deeper understanding on how to
provide persistent data to the application.

## Implementation Details

1. Setup realtime database in Firebase
2. Create interface for the task, filters, and task context provider
3. Create components (input box, filters, taskcard,and task list) and styled
   them
4. Create async functions to handle CRUD operation
5. Create context to share the task state and handler for each CRUD operation
6. Use useEffect to call the handler function when a change happen on the
   tasklist

### Tech Stack

- [x] CSS/SCSS
- [x] React (Typescript)
- [x] Firebase (Realtime Database & Hosting)
- [x] Git and Github

### Issue to be addressed

- [ ] Updating isCompleted on newly added task (At the moment when clicking
      check on a newly added task, it will create a new item in the database
      with undefined as sN)

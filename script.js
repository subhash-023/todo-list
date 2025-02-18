class Todo {
    static nextId = 1;

    constructor(
        title,
        desc,
        dueDate,
        priority,
        isCompleted,
        projectId,
        creationDate
    ) {
        this.title = title || "Untitled";
        this.desc = desc || "No description";
        const date = new Date(dueDate);
        this.dueDate = isNaN(date) ? null : date.toDateString();
        priority = priority.toLowerCase();
        if (priority != "low" && priority != "medium" && priority != "high")
            this.priority = null;
        else this.priority = priority;
        this.isCompleted = isCompleted || false;
        this.id = Todo.nextId++;
        this.projectId = projectId;
        this.creationDate = new Date(creationDate).toDateString();
    }

    updateProperty(property, value) {
        switch (property) {
            case "title":
                this.title = value;
                break;
            case "desc":
                this.desc = value;
                break;
            case "dueDate":
                const date = new Date(value);
                this.dueDate = date.toDateString();
                break;
            case "priority":
                this.priority = value;
                break;
            default:
                console.log(
                    `${property} is not a valid property to modify or doesn't exist`
                );
        }
    }

    toggleStatus() {
        this.isCompleted ? (this.isCompleted = false) : (this.isCompleted = true);
    }
}

class Project {
    static nextProjectId = 1;

    constructor(title) {
        this.title = title || "Untitled";
        this.projectId = Project.nextProjectId++;
    }

    setTitle(value) {
        this.title = value || this.title;
    }
}

function TodoManager() {
    const todos = [];
    const projects = [];

    const createTodo = (
        title,
        desc,
        dueDate,
        priority,
        isCompleted,
        projectId,
        creationDate
    ) => {
        todos.push(
            new Todo(
                title,
                desc,
                dueDate,
                priority,
                isCompleted,
                projectId,
                creationDate
            )
        );
        console.log(todos)
    };

    const updateTodo = (id, property, value) => {
        const findIndex = todos.findIndex((todo) => (todo.id = id));
        if (findIndex != -1) todos[findIndex].updateProperty(property, value);
        else console.log(`Todo with id ${id} doesn't exist`);

        console.log(todos)
    };

    const deleteTodo = (id) => {
        const findIndex = todos.findIndex((todo) => todo.id === id);
        if (findIndex !== -1) {
            todos.splice(findIndex, 1);
        } else {
            console.log(`Todo with id ${id} doesn't exist`);
        }
        console.log(todos);
    };

    const createProject = (project) => {
        projects.push(new Project(project));
        console.log(projects);
    };

    const TodosByProjectId = (projectId) => {
        filtered_todos = todos.filter((todo) => todo.projectId === projectId);
        return filtered_todos;
    };

    const UpdateProjectTitle = (projectId, value) => {
        findIndex = projects.findIndex(
            (project) => project.projectId === projectId
        );
        if (findIndex !== -1) {
            projects[findIndex].setTitle(value);
        } else {
            console.log(`Project with id ${projectId} doesn't exist`);
        }
        console.log(projects);
    };

    const deleteProject = (projectId) => {
        findIndex = projects.findIndex(
            (project) => project.projectId === projectId
        );
        if (findIndex !== -1) {
            projects.splice(findIndex, 1);
        } else {
            console.log(`Project with id ${projectId} doesn't exist`);
        }
        console.log(projects);
    };

    return {
        createTodo,
        updateTodo,
        deleteTodo,
        createProject,
        TodosByProjectId,
        UpdateProjectTitle,
        deleteProject,
    };
}

const todo_manager = TodoManager();
console.log(todo_manager);
todo_manager.createTodo(
    "sdfkj",
    "kfjhs",
    "2025-1-15",
    "medium",
    false,
    1,
    "2025-1-11"
);
todo_manager.createTodo(
    "sddffkj",
    "kfjhs",
    "2025-1-25",
    "medium",
    false,
    1,
    "2025-1-11"
);
todo_manager.createTodo(
    "sdfdsgkj",
    "kfjhs",
    "2025-1-20",
    "medium",
    false,
    2,
    "2025-1-11"
);

function DisplayController() {

    document.getElementById("createTodo").addEventListener("click", () => {
        document.querySelector('.modal-container').style.display = "block"
    })

    document.getElementById("Submit").addEventListener("click", () => {
        document.querySelector('.modal-container').style.display = "none"
    })
}

DisplayController()

// todo_manager.updateTodo('1', 'dueDate', '2025-1-16')
// todo_manager.deleteTodo(5)
// todo_manager.createProject("Project")
// todo_manager.createProject("")
// todo_manager.createProject("asdf")
// console.log(todo_manager.TodosByProjectId(2))
// todo_manager.UpdateProjectTitle(2, 'ProjectUpdate')
// todo_manager.deleteProject(3)
// const todo_1 = new Todo('title', 'desc', "kj", 'HiGh', false, 2, new Date(2025, 0, 8))
// todo_1.updateProperty('dueDate', "2025-1-12")
// todo_1.toggleStatus()
// console.log(todo_1)
// const project = new Project("Default")
// const project1 = new Project("Default")
// const project2 = new Project("Default")
// project.setTitle("Not default")
// console.log(project)
// var id = "id" + Date.now().toString(16) + Math.random().toString(16).slice(2);
// console.log(id);
import './RolesTasks.css'

const roles_tasks = [
    {
        roleName: "artist",
        id: "1",
        tasks: [
            {name: "task1"},
            {name: "task2"},
            {name: "task3"}
        ]
    },
    {
        roleName: "friend",
        id: "2",
        tasks: [
            {name: "task4"},
            {name: "task5"},
            {name: "task6"}
        ]
    },
    {
        roleName: "family",
        id: "3",
        tasks: [
            {name: "task4"},
            {name: "task5"},
            {name: "task6"}
        ]
    }
]

// Todo: create a component to hold RoleTasks
// Todo: use the Task component inside the RoleTasks

export default function RolesTasks() {
    return (
        <div className={"roles-tasks"}>
            <h2>Roles tasks</h2>
            {roles_tasks && roles_tasks.map((roleTasks) => (
                <div key={roleTasks.id}>
                    <div className={"role-tasks"}>
                        <h3>{roleTasks.roleName}</h3>
                        {roleTasks.tasks.map((task) => (
                            <div>{task.name}</div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
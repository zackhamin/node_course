const tasks = {
    tasks: [{
        text: 'Grocey shopping',
        completed: true
    },{
        text: 'Cook lunch',
        completed: false
    },{
        text: 'Wash clothes',
        completed: false
    }],
    getTasksToDo = () => {
      return this.tasks.filter((task) => task.completed === false
        )
    }
}

console.log(tasks.getTasksToDo())
import inquirer from "inquirer";
let todos = [];
let condition = true;

while(condition){
    let addTask = await inquirer.prompt(
        [
            {
                name: 'todo',
                type: 'input',
                message: 'Eid ki shopping kya ki'
            },
            {
                name: 'addMore',
                type: 'confirm',
                message: 'Aur kuch khareeda?',
                default: 'false',
            }
        ]
    );

    todos.push(addTask.todo);
    condition = addTask.addMore
    console.log(todos);
    
}
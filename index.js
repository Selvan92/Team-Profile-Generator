const inquirer = require("inquirer");
const Employee =require("./lib/Employee");
const Engineer =require("./lib/Engineer");
const Intern =require("./lib/Intern");
const Manager =require("./lib/Manager");
const generateHtml = require("./src/generatehtml")
const fs =require('fs');

const employees =[];



function employeeQuestions() {
    inquirer
.prompt([
    {
        type: 'input',
        message:'What is employee name?',
        name:'username',
    },
    {
        type: 'input',
        message:'What is employee id?',
        name:'userid',
    },
    {
        type: 'input',
        message:'What is employee emailid?',
        name:'emailid',
    },
    {
        type: 'list',
        message:'What is employee role?',
        name:'employeerole',
        choices: ['Employee','Engineer','Intern','Manager']
    }
])
.then(val => {
    if(val.employeerole === "Engineer") {
       
        inquirer
        .prompt({
            type: 'input',
            message: 'What is your gihub username?',
            name: 'githubname',
        }).then( () => { addEmployee(); })
    }
   else if (val.employeerole === "Intern") {
       
        inquirer
        .prompt({
            type: 'input',
            message: 'Which school you are?',
            name: 'schoolname',
        }).then( () => { addEmployee(); })
    
    }
    else if (val.employeerole === "Manager") {
        inquirer
        .prompt({
            type: 'input',
            message: 'What is your office number?',
            name: 'officenumber',
        }).then( ({officenumber}) => { 
            const newManager = new Manager (val.username,val.userid,val.emailid,officenumber)
            
            employees.push(newManager)
            
            
            addEmployee(); })
    }

    else {    
        addEmployee();
    }
})
}


function addEmployee() {
inquirer 
.prompt({
    type: "confirm",
    message:"Do you want to add more employee?",
    name:"choice",
})
.then (val=> {
if (val.choice) {
    const newEmployee = new employeeQuestions();
} else {
    console.log(employees);
    console.log("\nGoodbye!");
    var html = generateHtml(employees);
    fs.writeFile('./dist/index.html', html, function (){
        console.log('the write file is succeeded')
        process.exit(0);
    })

}
})
}


employeeQuestions();
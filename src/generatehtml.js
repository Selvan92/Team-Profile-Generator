const Engineer = require("../lib/Engineer")

function generateHtml(employees) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- CSS only -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
        <title>Team Profile</title>
    </head>
    <body >
        <h1 class="bg-danger text-light text-center ">My Team</h1>
        
        ${employees.map(function(employee){
            return `<section id="container" class=" w-10 h-40 p-2">
            <div  id="contHeader" class="card bg-primary  p-2 ">${employee.name} ${employee.getRole()}</div>
             <div class="card-header bg-secondary">
                 <div id="contAttribute" class="card-body bg-light">
                 <p>${employee.email}</p>
                 <p>${getlastProp(employee)}</p>

                
             </div>
            </div>
         </section>`
        })}




        
          
    </body>
    </html>`
}

function getlastProp(employee) {
    if(employee.getRole() == 'Manager'){
    return employee.officeNumber
    } else if (employee.getRole() == 'Engineer'){
        return employee.github
    } else if (employee.getRole() == 'Intern'){
        return employee.school
    } else {
        return '';
    }

}

module.exports = generateHtml;
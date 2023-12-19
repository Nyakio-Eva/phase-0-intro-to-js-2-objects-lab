// Write your solution in this file!
let employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',

}

function updateEmployeeWithKeyAndValue(employee,key,value){
    const newObj = {... employee};
    newObj[key] = value
    return newObj;
}

//console.log(updateEmployeeWithKeyAndValue(employee, 'streetAdress', '11 Broadway'));
//console.log(updateEmployeeWithKeyAndValue(employee['streetAddress']));

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee;
}
//console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway'));

function deleteFromEmployeeByKey(employee,key){
    const newob = {... employee};
    delete newob[key];
    return newob;
}
let newEmployee = ['name'];
//console.log(deleteFromEmployeeByKey(employee,newEmployee));

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}
//console.log(destructivelyDeleteFromEmployeeByKey(employee,'name'));
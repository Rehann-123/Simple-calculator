#! /usr/bin/env node
import inquirer from "inquirer";
let a = await inquirer.prompt([
    {
        name: "name1",
        type: "number",
        message: "ENTER YOUR FIRST NUMBER",
    },
    {
        name: "name2",
        type: "number",
        message: "ENTER YOUR SECOND NUMBER",
    },
    {
        name: "name3",
        type: "list",
        message: "Select Any Of The Operation",
        choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
    },
]);
if (a.name3 === "ADDITION") {
    let Additon = a.name1 + a.name2;
    console.log(`Addtion of two number is ${Additon}`);
}
else if (a.name3 === "SUBTRACITON") {
    let SUBTRACITON = a.name1 - a.name2;
    console.log(`Subtraction of two number is ${SUBTRACITON}`);
}
else if (a.name3 === "MULTIPLICATION") {
    let MULTIPLICATION = a.name1 * a.name2;
    console.log(`Multiplication of two number is ${MULTIPLICATION}`);
}
else if (a.name3 === "DIVISION") {
    let DIVISION = a.name1 / a.name2;
    console.log(`Division of two number is ${DIVISION}`);
}

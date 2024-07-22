import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const res = await inquirer.prompt([
    {
        name: "input",
        type: "number",
        message: "Please enter the amount in seconds",
        validate: (input) => {
            if (isNaN(input)) {
                return "Please enter a valid number";
            }
            else if (input > 60) {
                return `Second must be in 60`;
            }
            else {
                return true;
            }
        }
    }
]);
let input = res.input;
function startTime(val) {
    let intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime); // what is .setSeconds
    setInterval((() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log(`Timer has expired`);
            process.exit();
        }
        const minutes = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const seconds = Math.floor(timeDiff % 60);
        console.log(`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
    }), 1000); // why dont we use setTimeout instead setInterval
}
startTime(input);
// let intTime = new Date().setSeconds(new Date().getSeconds() +3)  
// const intervalTime = new Date(intTime)
// console.log(intervalTime)
// let a = new Date()
// console.log(a)   // when i console this then it show me standard Date but 
// let date = new Date()       // can you explain why we use new Date to get Seconds
// console.log("inetval time " + intervalTime)  // when i console with Stirng it show me day as well
// why timeer skip 1 second when i start with 10 it hide 9
// what is .setSeconds
// why dont we use setTimeout instead setInterval

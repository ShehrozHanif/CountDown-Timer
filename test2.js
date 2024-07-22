// import inquirer from "inquirer";
// import { differenceInSeconds } from "date-fns";
// const res = await inquirer.prompt([
//     {
//         name: "input",
//         type: "number",
//         message: "Please enter the amount in seconds",
//         validate: (input) => {
//             if (isNaN(input)) {
//                 return "Please enter a valid number";
//             } else if (input > 60) {
//                 return "Seconds must be in 60";
//             } else {
//                 return true;
//             }
//         }
//     }
// ]);
// let input = res.input;
// function startTime(val:number) {
//     let intTime = new Date().setSeconds(new Date().getSeconds() + val);
//     const intervalTime = new Date(intTime);
//     setInterval(() => {
//         const currentTime = new Date();
//         const timeDiff = differenceInSeconds(intervalTime, currentTime);
//         if (timeDiff <= 0) {
//             console.log("Timer has expired");
//             process.exit();
//         }
//         const minutes = Math.floor((timeDiff % (3600 * 24)) / 3600);
//         const seconds = Math.floor(timeDiff % 60);
//         console.log(`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
//     }, 1000);
// }
// startTime(input);
import inquirer from "inquirer";
import { differenceInSeconds, addSeconds } from "date-fns";
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
                return "Seconds must be in 60";
            }
            else {
                return true;
            }
        }
    }
]);
let input = res.input;
function startTime(val) {
    let endTime = addSeconds(new Date(), val);
    const intervalId = setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(endTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Timer has expired");
            clearInterval(intervalId);
            process.exit();
        }
        const minutes = Math.floor(timeDiff / 60);
        const seconds = timeDiff % 60;
        console.log(`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
    }, 1000);
}
startTime(input);
// function startTime(val:number) {
//     let intTime = new Date().setSeconds(new Date().getSeconds() + val);
//     const intervalTime = new Date(intTime);
//     setInterval(() => {
//         const currentTime = new Date();
//         const timeDiff = differenceInSeconds(intervalTime, currentTime);
//         if (timeDiff <= 0) {
//             console.log("Timer has expired");
//             process.exit();
//         }
//         const minutes = Math.floor((timeDiff % (3600 * 24)) / 3600);
//         const seconds = Math.floor(timeDiff % 60);
//         console.log(`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
//     }, 1000);
// }

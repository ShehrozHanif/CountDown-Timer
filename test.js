// import inquirer from "inquirer";
// import { differenceInSeconds, addSeconds } from "date-fns";
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
//     let endTime = addSeconds(new Date(), val);
//     const intervalId = setInterval(() => {
//         const currentTime = new Date();
//         const timeDiff = differenceInSeconds(endTime, currentTime);
//         if (timeDiff <= 0) {
//             console.log("Timer has expired");
//             clearInterval(intervalId);
//             process.exit();
//         }
//         const minutes = Math.floor(timeDiff / 60);
//         const seconds = timeDiff % 60;
//         console.log(`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
//     }, 1000);
// }
// startTime(input);
///-------------------------------------------------------Second
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
    function updateTimer() {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(endTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Timer has expired");
            process.exit();
        }
        const minutes = Math.floor(timeDiff / 60);
        const seconds = timeDiff % 60;
        console.log(`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
        // Calculate the exact delay until the next second to minimize drift
        const nextTick = 1000 - (currentTime.getTime() % 1000);
        setTimeout(updateTimer, nextTick);
    }
    updateTimer();
}
startTime(input);
//-------------------------------------------------Third
// import inquirer from "inquirer";
// import { differenceInSeconds, addSeconds } from "date-fns";
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
// function startTime(val: number) {
//     let endTime = addSeconds(new Date(), val);
//     const intervalId = setInterval(() => {
//         const currentTime = new Date();
//         const timeDiff = differenceInSeconds(endTime, currentTime);
//         if (timeDiff <= 0) {
//             console.log("Timer has expired");
//             clearInterval(intervalId); // Stop the interval
//             process.exit();
//         }
//         const minutes = Math.floor(timeDiff / 60);
//         const seconds = timeDiff % 60;
//         console.log(`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
//     }, 1000); // Fixed interval of 1 second
// }
// startTime(input);

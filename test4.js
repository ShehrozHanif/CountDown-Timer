#! /usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds, addSeconds } from "date-fns";
import chalk from "chalk";
// import { tr } from "date-fns/locale";
let input = await inquirer.prompt([
    {
        name: "timer",
        type: "number",
        message: chalk.green("Kindly Enter a Second to set a Countdown Timer"),
        transformer: (input, answers, flags) => {
            return chalk.yellow(input); // Change the input color
        },
        validate: (check) => {
            if (isNaN(check)) {
                return 'Please Enter a Valid number ';
            }
            else if (check > 60) {
                return 'Seconds must be in 60';
            }
            else {
                return true;
            }
        }
    }
]);
let check = input.timer;
function countDown(val) {
    let endTime = addSeconds(new Date(), val);
    function updateTimer() {
        let currentTime = new Date();
        let diff = differenceInSeconds(endTime, currentTime);
        if (diff <= 0) {
            console.log(chalk.yellow('Timer has expired'));
            process.exit();
        }
        let minutes = Math.floor(diff / 60);
        let second = diff % 60;
        console.log(`${chalk.red(minutes.toString().padStart(2, "0"))}${chalk.yellow(`:`)}${chalk.red(second.toString().padStart(2, "0"))}`);
        let nextTick = 1000 - (currentTime.getTime() % 1000);
        setTimeout(updateTimer, nextTick);
    }
    updateTimer();
}
countDown(check);
//--------------------------------------------------------------- Here End-------------------------------------------------------------
//----This is the Second Way to do this both ways are correct to make Secounds Countdown Timer only the Difference in both ways is SetTimeout
// and SetInterval. We use SetTimout in first way and SetInterval in the Second way
// let input = await inquirer.prompt([
//     {
//         name:"timer",
//         type:"number",
//         message:"Kindly Set a Timer you want to do",
//     }
// ])
// let check = input.timer
// function countDown(val:number){
//     let endTime = addSeconds(new Date(), val )
//     let interval =  setInterval(()=>{
//         let currentTime = new Date()
//         let diff = differenceInSeconds(endTime,currentTime)
//         if(diff <=0){
//             console.log('Time has expired')
//             clearInterval(interval)
//             process.exit()
//         }
//         let minutes =Math.floor(diff / 60) 
//         let second = diff % 60
//         console.log(`${minutes.toString().padStart(2,"0")} ${second.toString().padStart(2,"0")}`)
//     },1000)
// }
// countDown(check)
// SetTimeout is used to schedule a single execution of a function after a specified delay
// SetInterval is used to repatadely execute a function at a specified interval

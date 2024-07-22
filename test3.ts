import inquirer from "inquirer";
import { differenceInSeconds, addSeconds } from "date-fns";

async function main() {
    const res = await inquirer.prompt([
        {
            name: "input",
            type: "number",
            message: "Please enter the amount in seconds",
            validate: (input) => {
                if (isNaN(input)) {
                    return "Please enter a valid number";
                } else if (input > 60) {
                    return "Seconds must be within 60";
                } else {
                    return true;
                }
            }
        }
    ]);

    let input = res.input;
    startTime(input);
}

function startTime(val: number) {
    let endTime = addSeconds(new Date(), val);
    const intervalId = setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(endTime, currentTime);

        if (timeDiff <= 0) {
            clearInterval(intervalId); // Stop the interval
            // Log the final `00:00` and then print "Timer has expired"
            console.log("00:00");
            // console.log("Timer has expired")
            setTimeout(() => {
                console.log("Timer has expired");
            }, 1000); // Delay for the final message
        } else {
            const minutes = Math.floor(timeDiff / 60);
            const seconds = timeDiff % 60;
            console.log(`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
        }
    }, 1000); // Run the update every second
}

main();

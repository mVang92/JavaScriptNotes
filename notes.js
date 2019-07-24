const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

const reverse = arr => {
    let front = 0;
    let back = arr.length - 1;

    while (front < back) {
        swap(arr, front, back);
        front++;
        back--;
    }
}

const moveZeros = arr => {
    let currentIndex = 0;

    for (let letterIndex = 0; letterIndex < arr.length; letterIndex++) {
        let letter = arr[letterIndex];

        if (letter != 0) {
            swap(arr, currentIndex, letterIndex);
            currentIndex++;
        }
    }
}

const diagonalDifference = arr => {
    let leftSum = 0;
    let rightSum = 0;
    let rear = arr.length - 1;
    let difference;

    for (let i = 0; i < arr.length; i++) {
        leftSum += arr[i][i];
        rightSum += arr[i][rear--];
    }

    difference = rightSum - leftSum;
    return difference;
}

const doubleADollarAMonthRecursively = (days, currentDay, totalMoney) => {
    console.log("Day " + currentDay + ": " + totalMoney);
    if (currentDay < days) {
        currentDay++;
        totalMoney *= 2;
        doubleADollarAMonth(days, currentDay, totalMoney);
    }
}

const doubleADollarAMonthForLoop = () => {
    let days = 31;
    let totalMoney = 1;

    for (let currentDay = 1; currentDay <= days; currentDay++) {
        console.log("Day " + currentDay + ": " + totalMoney);
        totalMoney *= 2;
    }
}

const timerRecursive = () => {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let days = 0;
    runTimer(seconds, minutes, hours, days);
}

const runTimer = (seconds, minutes, hours, days) => {
    console.log(days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds");
    seconds++;
    if (seconds == 60) {
        minutes++;
        seconds = 0;
    }
    if (minutes == 60) {
        hours++;
        minutes = 0;
    }
    if (hours == 24) {
        days++;
        hours = 0;
    }

    setTimeout(function(){
        runTimer(seconds, minutes, hours, days);
    }, 1000)
}

const printRes = arr => {
    arr.forEach((element) => {
        console.log(element);
    })
}

const main = () => {
    let arr1 = [3, 6, 2, 6, 9];
    let arr2 = [3, 0, 8, 0, 0, 5, 1];
    let diagDiff = [[3, 4, 5], [4, 9, 1], [8, 6, 1]];
    let days = 31;
    let currentDay = 1;
    let totalMoney = 1;

    // Reverse an array -----------------------------
    // reverse(arr1);
    // printRes(arr1);

    // Move all zeros to the end of array -----------
    // moveZeros(arr2);
    // printRes(arr2);

    // Diagonal Difference --------------------------
    // const answer = diagonalDifference(diagDiff);
    // console.log(answer);

    // Double a dollar for a month ------------------
    // doubleADollarAMonthRecursively(days, currentDay, totalMoney);
    // doubleADollarAMonthForLoop();

    // Recursive timer
    timerRecursive();
}

main();
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

const doubleADollarAMonth = (days, currentDay, totalMoney) => {
    console.log("Day " + currentDay + ": " + totalMoney);
    if (currentDay < days) {
        currentDay ++;
        totalMoney *= 2;
        doubleADollarAMonth(days, currentDay, totalMoney);
    }
}

const printRes = arr => {
    arr.forEach((element) => {
        console.log(element);
    })
}

const main = () => {
    let arr1 = [3, 6, 2, 6, 9];
    let arr2 = [3, 0, 8, 0, 0, 5, 1];
    let diagDiff = [[3, 4, 5],[4, 9, 1],[8, 6, 1]];
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
    doubleADollarAMonth(days, currentDay, totalMoney);
}

main();
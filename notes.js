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

const printRes = arr => {
    arr.forEach((element) => {
        console.log(element);
    })
}

const main = () => {
    let arr1 = [3, 6, 2, 6, 9];
    let arr2 = [3, 0, 8, 0, 0, 5, 1];
    // Reverse an array -----------------------------
    // reverse(arr1);
    // printRes(arr1);

    // Move all zeros to the end of array -----------
    moveZeros(arr2);
    printRes(arr2);
}

main();
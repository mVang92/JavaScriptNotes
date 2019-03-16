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

const printRes = arr => {
    arr.forEach(function(element) {
        console.log(element);
    })
}

const main = () => {
    let arr1 = [3, 6, 2, 6, 9];
    // Reverse an array
    reverse(arr1);
    printRes(arr1);
}

main();
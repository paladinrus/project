// Место для первой задачи
function firstTask() {
    for (let i = 5; i <=10; i++ ) {
        console.log(i);
    }  
}
// Место для второй задачи
function secondTask() {
    for (let j = 20; j >= 10; j--) {
        if (j === 13) {
            break;
        }
        console.log(j);
    }
}
// Место для третьей задачи
function thirdTask() {
    for (let k = 2; k <=10; k++) {
        if (k % 2 > 0) {
            continue;
        } else {
            console.log(k);
        }
    }
}


// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    let i = 2;

    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    }
}

fourthTask()

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}



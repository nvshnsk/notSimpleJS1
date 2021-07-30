runTask1()

function runTask1() {
    let array = [56, -34, 0, 7, -43];
    sortArray(array)
    console.log(array);

    let array1 = [56, -34, 0, 7, -43];
    sortArrayReverse(array1)
    console.log(array1);

    function sortArray(arr) {
        function compare(a, b) {
            if (a > b) return 1;
            if (a == b) return 0;
            if (a < b) return -1;
        }
        arr.sort(compare);
    };

    function sortArrayReverse(arr) {
        function compareReverse(a, b) {
            if (a < b) return 1;
            if (a == b) return 0;
            if (a > b) return -1;
        }
        arr.sort(compareReverse);
    };
}

runTask2()

function runTask2() {

    let array = [-34, 56, 0, 7, -43];
    let max = getMaxOfArray(array);
    console.log(max);

    let min = getMinOfArray(array);
    console.log(min);

    function getMaxOfArray(arr) {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (max < arr[i]) {
                max = arr[i];
            }
        }
        return max;
    };

    function getMinOfArray(arr) {
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (min > arr[i]) {
                min = arr[i];
            }
        }
        return min;
    };
}
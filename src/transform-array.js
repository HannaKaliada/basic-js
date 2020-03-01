module.exports = function transform(arr) {
    let resultArr = [];
    if (arr.length == undefined) {
        throw Error;
    }
    else if (arr.length == 0) {
        return resultArr;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--double-next') {
            if(i<arr.length-1){
                resultArr.push(arr[i + 1]);
            }
        }
        else if (arr[i] === '--double-prev') {
            if(i>0){
                resultArr.push(arr[i - 1]);
            }
        }
        else if (arr[i] === '--discard-next') {
            if(i<arr.length-1){
                i++;
            }
        }
        else if (arr[i] === '--discard-prev') {
            if(i>0){
                resultArr.pop();
            }
        }
        else {
            resultArr.push(arr[i]);
        }
    }
    return resultArr;
};

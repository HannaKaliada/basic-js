module.exports = function repeater(str, options) {
    let resultArr = [];
    let additionArray = [];
    if (options.repeatTimes !== undefined) {
        if (options.additionRepeatTimes !== undefined) {
            for (let j = 0; j < options.additionRepeatTimes; j++) {
                additionArray.push(String(options.addition));
            }
        }
        for (let i = 0; i < options.repeatTimes; i++) {
            if (options.addition !== undefined) {
                if (options.additionRepeatTimes !== undefined) {
                    if (options.additionSeparator !== undefined) {
                        resultArr.push(str + additionArray.join(`${options.additionSeparator}`));
                    }
                    else {
                        resultArr.push(str + additionArray.join(''));
                    }
                }
                else {
                    resultArr.push(str + options.addition);
                }
            }
            else {
                resultArr.push(str);
            }
        }
        if (options.separator !== undefined) {
            return resultArr.join(`${options.separator}`);
        }
        else {
            return resultArr.join("+");
        }
    }
    else if (options.repeatTimes === undefined) {
        return str + options.addition;
    }
};

class VigenereCipheringMachine {
    constructor(isReverse) {
        this.isReverse = isReverse;
    }
    encrypt(message, key) {
        const lettersArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
        let encryptedArr = [];
        let resultKeyArr = [];
        let j = 0;
        let messageArr = message.toUpperCase().split('');
        let keyArr = key.toUpperCase().split('');
        lettersToNum(messageArr);
        lettersToNum(keyArr);
        function lettersToNum(arr) {
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < lettersArr.length; j++) {
                    if (arr[i] === lettersArr[j]) {
                        arr[i] = numbersArr[j];
                    }
                }
            }
        }
        for (let i = 0; resultKeyArr.length < messageArr.length; i++) {
            if (typeof messageArr[j] != 'number') {
                resultKeyArr.push('-');
                i--;
                j++;
            }
            else if (keyArr[i] == undefined) {
                i = -1;
            }
            else {
                j++;
                resultKeyArr.push(keyArr[i]);
            }
        }
        for (let i = 0; i < messageArr.length; i++) {
            if (typeof messageArr[i] != 'number') {
                encryptedArr.push(messageArr[i]);
            }
            else {
                encryptedArr.push(messageArr[i] + resultKeyArr[i]);
                if (encryptedArr[i] > 26) {
                    encryptedArr[i] = encryptedArr[i] - 26;
                }
            }
        }
        for (let i = 0; i < encryptedArr.length; i++) {
            for (let j = 0; j < numbersArr.length; j++) {
                if (typeof encryptedArr[i] == 'number' && encryptedArr[i] - 1 == numbersArr[j]) {
                    encryptedArr[i] = lettersArr[j];
                }
            }
        }
        if (this.reverse == false) {
            return encryptedArr.reverse().join('');
        }
        else {
            return encryptedArr.join('');
        }
    }

    decrypt(encryptedMessage, key) {
        const lettersArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
        let decryptedArr = [];
        let resultKeyArr = [];
        let messageArr = encryptedMessage.toUpperCase().split('');
        let keyArr = key.toUpperCase().split('');
        let j = 0;
        lettersToNum(messageArr);
        lettersToNum(keyArr);
        function lettersToNum(arr) {
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < lettersArr.length; j++) {
                    if (arr[i] === lettersArr[j]) {
                        arr[i] = numbersArr[j];
                    }
                }
            }
        }
        for (let i = 0; resultKeyArr.length < messageArr.length; i++) {
            if (typeof messageArr[j] != 'number') {
                resultKeyArr.push('-');
                i--;
                j++;
            }
            else if (keyArr[i] == undefined) {
                i = -1;
            }
            else {
                j++;
                resultKeyArr.push(keyArr[i]);
            }
        }
        for (let i = 0; i < messageArr.length; i++) {
            if (typeof messageArr[i] != 'number') {
                decryptedArr.push(messageArr[i]);
            }
            else {
                decryptedArr.push(messageArr[i] - resultKeyArr[i]);
                if (decryptedArr[i] < 0) {
                    decryptedArr[i] = decryptedArr[i] + 26;
                }
            }
        }
        for (let i = 0; i < decryptedArr.length; i++) {
            for (let j = 0; j < numbersArr.length; j++) {
                if (typeof decryptedArr[i] == 'number' && decryptedArr[i] + 1 == numbersArr[j]) {
                    decryptedArr[i] = lettersArr[j];
                }
            }
        }
        if (this.reverse == false) {
            return decryptedArr.reverse().join('');
        }
        else {
            return decryptedArr.join('');
        }
    }
}

module.exports = VigenereCipheringMachine;

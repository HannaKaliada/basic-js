class VigenereCipheringMachine {
    constructor(reverse) {
        this.reverse = reverse;
    }
    encrypt(message, key) {
        const lettersArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        let messageArr = message.toUpperCase().split('');
        let keyArr = key.toUpperCase().split('');
        let encryptedArr = [];
        messageArr = messageArr.map((letter) => {
            return (lettersArr.indexOf(letter) == -1) ? letter : lettersArr.indexOf(letter);
        })
        keyArr = keyArr.map(letter => lettersArr.indexOf(letter));
        let j = 0;
        for (let i = 0; i < messageArr.length; i++) {
            if (typeof (messageArr[i]) != 'number') {
                encryptedArr.push(messageArr[i]);
                continue;
            }
            else if (keyArr[j] === undefined) {
                j = 0;
            }

            encryptedArr.push(lettersArr[(messageArr[i] + keyArr[j]) % 26]);
            j++;
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
        let messageArr = encryptedMessage.toUpperCase().split('');
        let keyArr = key.toUpperCase().split('');
        let decryptedArr = [];
        messageArr = messageArr.map((letter) => {
            return (lettersArr.indexOf(letter) == -1) ? letter : lettersArr.indexOf(letter);
        })
        keyArr = keyArr.map(letter => lettersArr.indexOf(letter));
        let j = 0;
        for (let i = 0; i < messageArr.length; i++) {
            if (typeof (messageArr[i]) != 'number') {
                decryptedArr.push(messageArr[i]);
                continue;
            }
            else if (keyArr[j] === undefined) {
                j = 0;
            }

            decryptedArr.push(lettersArr[(messageArr[i] + 26 - keyArr[j]) % 26]);
            j++;
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

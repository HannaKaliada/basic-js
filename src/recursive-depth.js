module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if(arr.every(elem => !(elem instanceof Array))){
            return 1;
        }
        else{
            return 1 + this.calculateDepth([].concat(...arr));
        }
    }
};
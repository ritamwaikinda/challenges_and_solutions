/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let output = 0;
    
    while(num > 0){
        if (num%2 === 0){
            num = num/2
            output +=1
        } else {
            num = num -1
            output +=1
        }
    }
    
    return output
    
};
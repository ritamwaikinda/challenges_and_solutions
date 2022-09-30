/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let commonPrefix = "";
    for(let i = 0; i < strs[0].length; i++){
        for(let j=0; j<strs.length; j++){
                if(!strs[j][i]){
                    return commonPrefix
                }
                if(strs[0][i] !== strs[j][i]){
                    return commonPrefix
                }
            }
            commonPrefix += strs[0][i]
    }
    return commonPrefix
};
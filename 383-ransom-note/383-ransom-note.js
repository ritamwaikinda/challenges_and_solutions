/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magObj = {};
    for(let i=0; i<magazine.length; i++){
        if (magObj[magazine[i]] === undefined){
            magObj[magazine[i]] = 1
        } else {
            magObj[magazine[i]] += 1
        }
    }
    //not I have my magazine object
    console.log(magObj)
    for(let i=0; i<ransomNote.length; i++){
        if ((magObj[ransomNote[i]] === undefined) || (magObj[ransomNote[i]] < 1)){
            return false
        } else {
            magObj[ransomNote[i]] -= 1
        }
        
    }
    return true
};
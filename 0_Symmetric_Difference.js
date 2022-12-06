/**
 * Author: Keith K. Kadima
 *
 * Description:
 *
 * function that takes two or more arrays and returns
 * an array of their symmetric difference. The returned array must contain only unique values (no duplicates).
 *
 * The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. 
 * For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.
 *
 */


function sym() {
    let args = []

    for (let i = 0; i < arguments.length; ++i){
       args.push(arguments[i])
     }

 
    function symdiff(args1, args2){
        let v = args1.filter((el) => 
        !args2.includes(el)
        )
        
        let w = args2.filter((el) =>
        !args1.includes(el)
        )

        let answer = v.concat(w)
        let uniqanswer = [...new Set(answer)]
        return uniqanswer
    } 

    return args.reduce(symdiff)
 
}

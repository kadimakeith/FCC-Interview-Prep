function sym(args1, args2) {
    let v = args1.filter((el) => 
       !args2.includes(el)
    )
    
    let w = args2.filter((el) =>
       !args1.includes(el)
    )

   let answer = v.concat(w)
   
   //Remove duplicates
   let uniqanswer = [...new Set(answer)]
   return uniqanswer
}

//TO DO - Implement for N arguments

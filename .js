function stars(n){
    let b = '';
    for(let i=1; i<=n; i++){
        for(let a=1; a<=n-i; a++){
            b += "  ";
        }
        for(let j=1; j<=i; j++){
           b += "*  ";
        }
        console.log(b);
        b = "";
    }
}
stars(5);
function soma(n){
    while(n>1){
        return n + soma(n-1)
    }
    if (n === 1){
        return 1
    }
}
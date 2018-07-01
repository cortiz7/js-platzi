
function* fibonacci() {
    let a = 0, b = 1
    
    while(true) {
        let f = a
        a = b
        b = f + b
        let reset = yield f
        if (reset) a = 0, b = 1
    }
}
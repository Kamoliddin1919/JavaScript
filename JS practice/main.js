function asd() {
    var a = document.getElementById('a').value
    var b = document.getElementById('b').value
    var amal = document.getElementById('math').value

    if (a !=="" && b !== ""){
        var result = 0
        a = parseFloat(a)
        b = parseFloat(b)
        switch (amal){
            case '+':
                result = a + b
                break
            case '-':
                result = a - b
                break
            case '*':
                result = a * b
                break
            case '/':
                result = a / b
                break
            default:
                result = 0
        }
        document.getElementById('dis').innerText = result

    }else{
        alert('a va b!')
    }
}






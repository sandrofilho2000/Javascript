function clicar(){
    var select = document.getElementById('select')
    var num = Number (document.getElementById('number').value)
    do{
        var c = 1
        opc = document.createElement('option')
        opc.text = `${num} x ${c} = ${num*c}`
        select.appendChild(opc)
        c++
    } while (c<=10);
    
    
}   
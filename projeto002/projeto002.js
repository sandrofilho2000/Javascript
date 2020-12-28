function clicar(){    
    
    var inicio = Number(document.getElementById('begin').value)
    var fim = Number(document.getElementById('end').value)
    var passo = Number(document.getElementById('pass').value)
    var div = document.getElementById('div')
    var cont =''
    if (passo==0){
        alert('Passo 0. Consideramdo passo 1.')
        passo = 1  
        
    }
    for (c = inicio; c<fim; c += passo-1){
        cont = cont + ' -> ' + String(c) 
        
    }
    div.style.height = '200px'
    div.innerHTML += cont
    div.innerHTML += ' -> FIM!'
    
}   
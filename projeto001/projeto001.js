img = document.createElement('img')
function clicar(){  
    var div = document.getElementById('div')
    var color = document.getElementsByName('color')
    var img = document.getElementById ('imagem')
    
    div.style.height = '350px'
    if (color[0].checked){
        img.setAttribute ('src', 'foto-jovem-m.png')
        div.appendChild(img)
    }
    else if (color[1].checked){
        img.setAttribute ('src', 'foto-jovem-f.png')
        div.appendChild(img)
    }
    
}

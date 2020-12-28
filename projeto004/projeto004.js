function avg(list){
  sum = 0
  for (k=0; k<list.length; k++){
    sum+= list[k]
  }
  return sum/list.length
}
let num = Number(document.getElementById('number').value)
let select = document.getElementById('select')

number=[]
function clicar(){
  let num = Number(document.getElementById('number').value)
  let select = document.getElementById('select')
  opc = document.createElement('option')
  if (num > 0 && num <= 100){
      n = number.indexOf(num)
      n = Number(n)
      if (number.indexOf(num) == -1){
        number.push(num)
        
        opc.innerHTML = `${num} Adicionado.`
        select.appendChild(opc)
      }else{
        alert('Valores duplicados, por favor digite outro número.')
      }
  }else{
    alert('Por favor, digite valores válidos!') 
  }
}
function finalizar(){
  if (number.length!=0){
    let div = document.getElementById('div')
    let media = avg(number)
    p = document.createElement ('p')
    p.innerHTML = `Ao todo, foram registrados ${number.length} valores</br>O maior valor registrado foi ${number.sort()[number.length-1]}</br>O menor valor registrado foi ${number.sort()[0]}</br>A média dos valores adicionados é ${media}`
    div.appendChild(p)
    div.style.height = '200px'
  }else{
    alert('Lista vazia! Por favor insira um valor acima.')
  }
}
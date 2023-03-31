function somar(){
  var result = $("input:checkbox");
  var total = 0;

  for(var i=0; i<result.lenght; i++)
  {
    total = total + parseFloat(result[i].value)
  }
  $("#res").val(total.toFixed(2));
}
somar();
$(":checkbox").click(somar);



//FUNÇÃO PARA PEGAR OS NOMES DOS SERVIÇOS DAS CHECKBOX'S
function checarServicos(){

  var arr = [];
  var inputElements = document.getElementsByClassName('large-checkbox');
  for(var i=0; inputElements[i]; ++i)
  {
    if(inputElements[i].checked)
    {
      arr.push(inputElements[i].name);
    }
  }
  document.querySelector('#res_servicos2').innerHTML = ('SERVIÇOS ESCOLHIDOS: <br>' + arr);
  document.querySelector('#res_servicos').innerHTML = ('SERVIÇOS ESCOLHIDOS: <br>' + arr);
}




var contador;
function contarServicos()
{
  var elements = document.getElementsByClassName('large-checkbox');
  for(var i=0; elements[i]; ++i)
  {
    if(elements[i].checked)
    {
      contador++;
    }
  }
  document.querySelector('#contss').innerHTML = contador;

}

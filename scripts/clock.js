/*Script de relógio*/
/*Variaveis de mês, as variaveis de hora são nativas do jQuery (Biblioteca para JavaScript)*/
/* "document.getElementById('time').innerHTML = clocktext;" faz a troca do conteúdo da div que tenha o id 'time' para o conteúdo da variável clocktext,
que é a soma do resultado de todas as variáveis os ifs e else ifs determinam se o horário for maior, igual ou menor a 12 o que colocar no ap, que no caso seria 'append' */
/* JavaScript é bem simples de entender e realmente não acho que você teria dificuldade, o maior problema é ser completamente baseado em matemática, oq ue pode ser um pouco chato.*/
var tmonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function GetClock() {
  var d = new Date();
  var nmonth = d.getMonth(),
    ndate = d.getDate(),
    nyear = d.getFullYear();
  var nhour = d.getHours(),
    nmin = d.getMinutes(),
    ap;
  if (nhour == 0) {
    ap = " AM";
    nhour = 12;
  } else if (nhour < 12) {
    ap = " AM";
  } else if (nhour == 12) {
    ap = " PM";
  } else if (nhour > 12) {
    ap = " PM";
    nhour -= 12;
  }
  if (nmin <= 9) nmin = "0" + nmin;
  var clocktext = "" + tmonth[nmonth] + " " + ndate + ", " + nyear + "  |  " + nhour + ":" + nmin + ap + "";
  document.getElementById('time').innerHTML = clocktext;
}
GetClock();
setInterval(GetClock, 1000);

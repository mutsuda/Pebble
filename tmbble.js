var parada = "0001"
ajax({ url: 'http://www.tmb.cat/piu/ca_ES/piuimodesolucio.jsp?parada='+ parada }, function(data){
  var info = data.match(/<td align="center">(.*?)<\/td>/g);
  simply.title('Parada ' + parada);
  var final = ""
  for (var i = 0; i < info.length; i++) 
  {
    final.concat(clean(info[i]));
  }
  simply.body(final)
});


function clean(text)
{
  return text.replace("<td align=\"center\">",'').replace("</td>","")
}

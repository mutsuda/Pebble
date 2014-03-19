var parada = "0001"
ajax({ url: 'http://www.tmb.cat/piu/ca_ES/piuimodesolucio.jsp?parada='+ parada }, function(data){
  var info = data.match(/<td align="center">(.*?)<\/td>/g);
  simply.title('Parada ' + parada);
  var output = info[3];
  //simply.body(clean(info[3]));
  for (var i = 1; i<info.length; i++)
  {
    output = output + " " + info[i]
  }
  simply.body(clean(output));
});


function clean(text)
{
  return text.replace("<td align=\"center\">",'').replace("</td>","")
}

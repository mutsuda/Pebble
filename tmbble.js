var parada = "0001"
ajax({ url: 'http://www.tmb.cat/piu/ca_ES/piuimodesolucio.jsp?parada='+ parada }, function(data){
  var info = data.match(/<td align="center">(.*?)<\/td>/g);
  simply.title('Parada ' + parada);
  var output = "";
  for (var i = 2; i<info.length; i++)
  {
    output = output + " " + info[i];
    if (i%2!=0) output = output + "\n"
  }
  simply.body(clean(output));
});


function clean(text)
{
  return text.replace(/<td align=\"center\">/g,'').replace(/<\/td>/g,'').replace(/<b>/g,'').replace(/<\/b>/g,'');
}

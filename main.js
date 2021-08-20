var ncountry = document.getElementById('inputCountry');
var nlan = document.getElementById('inputLang');

var keyTable = document.getElementById('keyTable');

function ANPL_generator(){
	keyTable.innerHTML = '<table class="table">'+
			  '<thead>'+
			    '<tr class="bg-primary text-white">'+
			      '<th scope="col-11">Description</th>'+
			    '</tr>'+
			  '</thead>'+
			  '<tbody>'+
			    '<tr>'+
			      '<td><textarea name="" id="" cols="100" rows="3" class="form-control">Read all '+nlan.value+' newspaper, '+nlan.value+' news, '+ncountry.value+' news, all '+nlan.value+' online newspapers, '+nlan.value+' newspaper list, '+nlan.value+' newspaper, daily '+nlan.value+' newspaper, '+ncountry.value+' news, '+ncountry.value+' newspaper, '+ncountry.value+' newspaper, '+ncountry.value+' news portals, '+ncountry.value+' all newspaper, all '+ncountry.value+', news '+ncountry.value+', '+ncountry.value+' news live, latest news, latest '+nlan.value+' news, '+nlan.value+' news portal, all '+nlan.value+' news.</textarea></td>'+
			    '</tr>'+
			  '</tbody>'+
			'</table>';
			
	}
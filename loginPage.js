function editRow(no)
{

	

 var sno=document.getElementById("snoRow"+no);
 var action=document.getElementById("actionRow"+no);
 var date=document.getElementById("dateRow"+no);

	
 var snoData=sno.innerHTML;
 var actionData=action.innerHTML;
 var dateData=date.innerHTML;
	
 sno.innerHTML="<input type='text' id='snoText"+no+"' value='"+snoData+"'>";
 action.innerHTML="<input type='text' id='actionText"+no+"' value='"+actionData+"'>";
 date.innerHTML="<input type='date' id='dateText"+no+"' value='"+dateData+"'>";
  document.getElementById("editButton"+no).style.display="none";
 document.getElementById("saveButton"+no).style.display="block";

}

function saveRow(no)
{
 var snoVal=document.getElementById("snoText"+no).value;
 var actionVal=document.getElementById("actionText"+no).value;
 var dateVal=document.getElementById("dateText"+no).value;

 document.getElementById("snoRow"+no).innerHTML=snoVal;
 document.getElementById("actionRow"+no).innerHTML=actionVal;
 document.getElementById("dateRow"+no).innerHTML=dateVal;

 document.getElementById("editButton"+no).style.display="block";
 document.getElementById("saveButton"+no).style.display="none";
}

function deleteRow(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}	

function addRow()
{
 var newSno=document.getElementById("newSno").value;
 var newAction=document.getElementById("newAction").value;
 var newDate=document.getElementById("newDate").value;
 var image=document.getElementById("img").value;

   

 var table=document.getElementById("dataTable");
 var tableLen=(table.rows.length)-1;
 var row = table.insertRow(tableLen).outerHTML="<tr id='row"+tableLen+"'><td id='snoRow"+tableLen+"'>"+newSno+"</td><td id='actionRow"+tableLen+"'>"+newAction+"</td> <td id='dateRow"+tableLen+"'>"+newDate+"</td><td><input type='button' id='editButton"+tableLen+"' value='Update' class='edit' onclick='editRow("+tableLen+")'> <input type='button' id='saveButton"+tableLen+"' value='Save' class='save' onclick='saveRow("+tableLen+")'> <input type='button' value='Delete' class='delete' onclick='deleteRow("+tableLen+")'></td><td> <button value='Image' onclick='addImage("+tableLen+")' type='button' id='img"+tableLen+"'>"+image+"</td></tr>";


 document.getElementById("newSno").value="";
 document.getElementById("newAction").value="";
 document.getElementById("newDate").value="";
 document.getElementById("img").value="";




 document.getElementById("saveButton"+tableLen+"").style.display = "none";
document.getElementById("img"+tableLen+"").style.width="50px"
document.getElementById("img"+tableLen+"").style.height="20px"
 document.getElementById("img"+tableLen+"").value = "newButtonValue";

}
function showAlert() 
  {     
    var name = document.getElementById("inputdash").value;
    var message1="WELCOME "+ name+ "!";
   
    var title=document.querySelector("#inputdash").textContent;
    title=" Welcome "+name;
    document.querySelector("#contentd").textContent=title;
  } 
  function addImage() {
    
      location.href = "https://cdn.xl.thumbs.canstockphoto.com/action-plan-sign-action-plan-paper-origami-speech-bubble-action-plan-tag-action-plan-banner-clipart-vector_csp60137757.jpg";
  
}

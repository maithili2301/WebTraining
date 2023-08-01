/**
 * 
 */
 
 
function checkEmptyField(fieldId) {
 
    alert('checkEmptyField '+fieldId);
    
}

function validate() {
               var x=document.getElementById('uname').value;
               var y=document.getElementById('upass').value;
               
               console.log('value of x '+x);
               console.log('value of y '+y);

               if(x =="") {
                   //alert('Username cannot be blank');	
                   document.getElementById("nameErr").innerHTML="Username cannot be blank";
                   return false;
               }		
               
               if(y =="") {
                   //alert('Password cannot be blank');	return false
                   document.getElementById("passErr").innerHTML="Password cannot be blank";
                   return false;
               }			
               return true;
           }	

function clearTheForm() {
               document.getElementById('uname').value="";
               document.getElementById('upass').value="";
               
}

function clearNameErrMsg() {
               document.getElementById('nameErr').innerHTML="";

}
           
function clearPassErrMsg() {
               document.getElementById('passErr').innerHTML="";

}

function dateOfBirthFun(){
  
    return maxDate;
}

function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{

return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}
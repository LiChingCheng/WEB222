
function formValidation(){
	clearError();
	return Validation();
}

function Validation(){
	var valid=true;
	var messages="";

//FirstName
	var fninput=document.signup.FirstName.value.trim();

	if(fninput[0]<"A"||fninput[0]>"Z"){
		messages+="<p> * First Name Shold Start With A Capital.</p>";
		valid=false;
	}

	else {
		fninput=fninput.toUpperCase();
		for(var i=0;i<fninput.length;i++){
			if(fninput.charAt(i)<"A"||fninput.charAt(i)>"Z"){
				messages+="<p> * First Name Shold Contain Alphabet Only.</p>";
				i=fninput.length;
				valid=false;
			}
		}
	}

//LastName
	var lninput=document.signup.LastName.value.trim();

	if(lninput[0]<"A"||lninput[0]>"Z"){
		messages+="<p> * Last Name Shold Start With A Capital.</p>";
		valid=false;
	}

	else{
		lninput=lninput.toUpperCase();
		for(var i=0;i<lninput.length;i++){
			if(lninput.charAt(i)<"A"||lninput.charAt(i)>"Z"){
				messages+="<p> * Last Name Shold Contain Alphabet Only.</p>";
				i=lninput.length;
				valid=false;		
			}
		}
	}

//Password
	var pwinput=document.signup.Password.value.trim();
	var alphString="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var next=true;
	var wrong=false;
	var wrong2=false;

	if(pwinput.length!=6){
		messages+="<p> * Password Shold Must Be 6 Characters Long.</p>";
		next=false;
	}

	if(next){
		if (alphString.indexOf(pwinput.substr(0,1))< 0) {
			messages+="<p> * Password Shold Start With A Letter.</p>";
			next=false;
		}	
	}

	if(next){
		if(wrong==false){
			for(var i=0;i<pwinput.length;i++){
				if((pwinput[i]>="0")&&(pwinput[i]<="9")){
					wrong=true;
				}
			}
		}

			if(wrong==false){
				messages+="<p> * Password Shold Contain At Least 1 Digit.</p>";
				next=false;
			}
		}

	if(next){
		if(wrong2==false){
			for(var i=0;i<pwinput.length;i++){
				if((pwinput[i]>="A")&&(pwinput[i]<="Z")){
					i=pwinput.length;
					wrong2=true;
				}
			}
		}

		if(wrong2==false){
			messages+="<p> * Password Shold Contain At Least 1 UpperCase Alphabet.</p>";
			next=false;
		}
	}

	if(!next){
		valid=false;
	}

//PasswordConfirm
	if(document.signup.Password.value.trim()!=document.signup.PasswordC.value.trim()){
		messages+="<p> * Password Must Be The Same.</p>";
		valid=false;
	}

//UserName
	var uninput=document.signup.UserName.value.trim();

	if(uninput.length<6){
		messages+="<p> * User Name Shold Contain At Least 6 Characters.</p>";
		valid=false;
	}

	else{
		uninput=uninput.toUpperCase();
		if(uninput[0]<"A"||uninput[0]>"Z"){
			messages+="<p> * User Name Must Start With A Letter.</p>";
			valid=false;
		}
	}

//EducationLevel
	var x=document.getElementById("EducateLevel");
                                      
    if(x.selectedIndex==0){
      	messages+="<p> * Education Level Must Be Selected.</p>";
   	 	valid=false; 
   	}

//EducationStatus
	var asinput=document.signup.EducateStatu.length;
	var counter=0;

	for (var i = 0; i < asinput; i++)  {
		if (document.signup.EducateStatu[i].checked) {     
    	  counter++;
		}
	} 

 	if(counter==0){
 		messages+="<p> * Education Statu Must Be Checked.</p>";
		valid=false;
 	}

//Age
	var aginput=document.signup.Age.value.trim();

	if(aginput>60||aginput<18){
		messages+="<p> * Age Shold Between 18 and 60.</p>";
		valid=false;
	}

	if(!valid){
		showErrors(messages);
		return false;
	}

	else{
		return true; 
	}
}

function showErrors(messages) { 
    document.getElementById('errors').innerHTML += messages;
}  

function clearError(){
	  document.querySelector('#errors').innerHTML = "";
}


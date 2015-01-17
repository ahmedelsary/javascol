
	function validate(){
	var b=false;
	var email=document.getElementById("email").value;
	var pass=document.getElementById("pass").value;
	
	if(email.length == 0)
	{
		document.getElementById("vmail").innerHTML="Email reqired";
		document.getElementById("email").focus();
		b= false;
	}
	if(pass.length== 0)
	{
	
	document.getElementById("vpass").innerHTML="Password reqired";
	document.getElementById("pass").focus();
	b= false;
	}
	return b
	}
	
	function validateEmail()
	{
		var email=document.getElementById("email").value;
	if(email.length == 0)
	{
		document.getElementById("vmail").innerHTML="Email reqired";
			document.getElementById("email").focus();
	}
	else 
	{
		var pemail=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ig;
		var b=pemail.test(email);
		if(b == false)
		{
		document.getElementById("vmail").innerHTML="Email error";
		document.getElementById("email").focus();
		}
		else
		{
		document.getElementById("vmail").innerHTML="";
		}
	}

	}
	

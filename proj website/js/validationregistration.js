
	function validate(){
	
	var b=false;
	
	var fname=document.getElementById("fname").value;
	var lname=document.getElementById("lname").value;
	var email=document.getElementById("email").value;
	
	var pass=document.getElementById("pass").value;
	var repass=document.getElementById("repass").value;
	
	
	
	if(fname.length == 0)
	{
		document.getElementById("vfname").innerHTML="first name reqired";
		document.getElementById("fname").focus();
		b=false;
	}
	if(lname.length == 0)
	{
		document.getElementById("vlname").innerHTML="last name reqired";
		document.getElementById("lname").focus();
		b= false;
	}
	
	if(email.length == 0)
	{
		document.getElementById("vemail").innerHTML="Email reqired";
		document.getElementById("email").focus();
		b= false;
	}
	if(pass.length== 0)
	{
	
		document.getElementById("vpass").innerHTML="Password reqired";
		document.getElementById("pass").focus();
		b= false;
	}

	return b;
	}
	
	function validatefname(){
	var fname=document.getElementById("fname").value;
		if(fname.length == 0)
	{
		document.getElementById("vfname").innerHTML="first name reqired";
		document.getElementById("fname").focus();
	}
		else
		{
		var pname=/^[a-z]+$/ig
		var b=pname.test(fname);
			if(b == false)
			{
				document.getElementById("vfname").innerHTML="first name error";
				document.getElementById("fname").focus();
			
			}
			else
			{
				document.getElementById("vfname").innerHTML="";
			}
		}
	}
	function validatelname(){
	var lname=document.getElementById("lname").value;
		if(lname.length == 0)
	{
		document.getElementById("vlname").innerHTML="last name reqired";
		document.getElementById("lname").focus();
	}
		else
		{
		var pname=/^[a-z]+$/ig
		var b=pname.test(lname);
			if(b == false)
			{
				document.getElementById("vlname").innerHTML="last name error";
				document.getElementById("lname").focus();
			
			}
			else
			{
				document.getElementById("vlname").innerHTML="";
			}
		}
	
	}
	function validateEmail(){
			var email=document.getElementById("email").value;
	if(email.length == 0)
	{
		document.getElementById("vemail").innerHTML="Email reqired";
			document.getElementById("email").focus();
	}
	else 
	{
		var pemail=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ig;
		var b=pemail.test(email);
		if(b == false)
		{
		document.getElementById("vemail").innerHTML="Email error";
		document.getElementById("email").focus();
		}
		else
		{
		document.getElementById("vemail").innerHTML="";
		}
	}
	
	
	}
	function validatepass(){
	
	var pass=document.getElementById("pass").value;
		if(pass.length == 0)
	{
		document.getElementById("vpass").innerHTML="password reqired";
		document.getElementById("pass").focus();
	}
		else
		{
		var pname=/^.{6,9}$/ig
		var b=pname.test(pass);
			if(b == false)
			{
				document.getElementById("vpass").innerHTML="password 6 to 9 word";
				document.getElementById("pass").focus();
			
			}
			else
			{
				document.getElementById("vpass").innerHTML="";
			}
		}
	
	
	
	
	}
	function checkpass(){
	var pass=document.getElementById("pass").value;
	var repass=document.getElementById("repass").value;
	
	if(pass != repass)
	{
	document.getElementById("vrepass").innerHTML="password not match";
	}
	else
	{
		document.getElementById("vrepass").innerHTML="";
	}
	
	
	
	}
	
	function res()
	{
		document.getElementById("vfname").innerHTML="";
		document.getElementById("vlname").innerHTML="";
		document.getElementById("vemail").innerHTML="";
		
		document.getElementById("vpass").innerHTML="";
		document.getElementById("vrepass").innerHTML="";
		
	}
	
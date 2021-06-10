// Copyright 2020 TalkersCode.com
// Login Form With Limited Login Attempts Using JavaScript And HTML (May 2020)
// © 2021 All Rights Reserved To TalkersCode.com


 


































































































































































































var login_attempts=3;
function check_form()
{
 var username=document.getElementById("username").value;
 var password=document.getElementById("password").value;
 if(username=="Pengolah Sertifikat" && password=="P3ngOlah S3rT1f1KaT")
 {
  alert("SuccessFully Logged In");
  document.getElementById("username").value="";
  document.getElementById("password").value="";
  window.open('./certpkl/cert.html');
 }
 else
 {
  if(login_attempts==0)
  {
   alert("No Login Attempts Available");
  }
  else
  {
   login_attempts=login_attempts-1;
   alert("Login Failed Now Only "+login_attempts+" Login Attempts Available");
   if(login_attempts==0)
   {
    document.getElementById("username").disabled=true;
    document.getElementById("password").disabled=true;
    document.getElementById("form1").disabled=true;
   }
  }
 }
 return false;
}	
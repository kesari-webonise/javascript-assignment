var set=function()
	{
		if(this=="l")
		{
			localStorage.setItem(document.getElementById("txtk").value,document.getElementById("txtv").value);
			alert("Added to local storage");
		} 
		else {
			sessionStorage.setItem(document.getElementById("txtk").value,document.getElementById("txtv").value);
			alert("Added to session storage");				
		}
	};

var getAll=function()
		{
			if(this=='l')
			{
				for(let i=0;i<localStorage.length;i++)
			{
				alert("Key : "+localStorage.key(i)+ " Value : "+localStorage.getItem(localStorage.key(i)));
			}
			} else	{
				for(let i=0;i<sessionStorage.length;i++)
				{
					alert("Key : "+sessionStorage.key(i)+ " Value : "+sessionStorage.getItem(sessionStorage.key(i)));
				}
			}	
		};

var delAll=function()
		{
			if(this=='l')
			{
				localStorage.clear();
				alert("All data from local storage deleted");
			} else {
				sessionStorage.clear();
				alert("All data from session storage deleted");
			}
		};
var addCookie=function()
		{
			document.cookie=document.getElementById('txtk').value+"="+document.getElementById('txtv').value;
			alert("Cookie added");
		};

var showCookies=function()
	{
	alert(document.cookie);
	};


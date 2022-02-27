$("#submit").click(
	function() {
		var name=document.getElementById("name").value,
			email=document.getElementById("email").value,
			message=document.getElementById("message").value;
		alert(name + email + message + "All right!");
		
		self.location = "https://cn.bing.com/";
		// window.location.href = ;
		return true;
	})
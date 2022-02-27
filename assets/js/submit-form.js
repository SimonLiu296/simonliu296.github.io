$("#submit").click(
	function() {
		var name=document.getElementById("name").value,
			email=document.getElementById("email").value,
			message=document.getElementById("message").value;
		alert("提交失败！\n服务器终止提交");
		
		// window.location.href = ;
		return true;
	})
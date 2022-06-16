function showMenu() {
	var menu = document.getElementById('mobile');

	if (menu.style.height === "auto") {
		menu.style.height = "0%";
		menu.style.paddingTop = "0%";
	}
	else{
		menu.style.height = "auto";
		menu.style.paddingTop = "80px";
	}
}
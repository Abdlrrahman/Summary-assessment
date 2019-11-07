function addItem(list, color) {
	var unorderdList = getElementById("ul1");
	var li = document.createElement(list,);
	li.css(color);
	if(color === 'red' || color === 'blue' || color === 'yellow') {
		unorderdList.add(li);
	}
}
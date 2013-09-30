// hide first element with given class
function hide_class(klass)
{
	var element = document.querySelector("." + klass);
	if (element !== null)
		element.style.display = 'none';
}

// hide element with given id
function hide_id(id)
{
	var element = document.getElementById(id);
	if (element !== null)
		element.style.display = 'none';
}

// hide all elements with given class
function hide_classes(klass)
{
	var elements = document.querySelectorAll("." + klass);
	for (var i = 0; i < elements.length; i++)
		elements[i].style.display = 'none';
}

// call func now and whenever elements are added dynamically
function always(func)
{
	func();
	document.addEventListener('DOMNodeInserted', func);
}

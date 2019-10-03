"use strict"

var current_color, is_drawing, brush_radius;
is_drawing = false
brush_radius = 10;


window.onload = function () {
	current_color = getCurrentColor();

	let nodelist = document.getElementsByClassName("color");
	for (let i = 0; i < nodelist.length; i++) {
		nodelist[i].onclick = function () {
			setCurrentColor(nodelist[i].getAttribute("id"));
		}
	}

	let canvas_element = document.getElementById("main-canvas");
	canvas_element.setAttribute("width", parseInt(document.documentElement.clientWidth));
	canvas_element.setAttribute("height", parseInt(document.documentElement.clientHeight));

	let canvas_context = canvas_element.getContext("2d");
	canvas_element.onmousemove = function (evt) {
		if (is_drawing) {
			canvas_context.beginPath();
			canvas_context.arc(evt.offsetX, evt.offsetY, brush_radius, 0, 2*Math.PI, false);
			canvas_context.fillStyle = current_color;
			canvas_context.fill();
		}
		console.log(is_drawing);
	}
	canvas_element.onmousedown = function () {
		is_drawing = true;
	}
	canvas_element.onmouseup = function () {
		is_drawing = false;
	}
}

function getCurrentColor() {
	let color_nodelist = document.getElementsByClassName("color-current");
	return color_nodelist[0].getAttribute("id");
}

function setCurrentColor(color) {
	let color_element = document.getElementById(current_color);
	let new_color_element = document.getElementById(color);
	current_color = color;
	removeClassFromElement(color_element, "color-current");
	addClassToElement(new_color_element, "color-current");
}

function removeStringFromArray(word, list) {
	let filtered = list.filter((value, index, arr) => {
		if (value !== word) {
			return value;
		}
	})
	return filtered;
}

function removeClassFromElement(element, classname) {
	element.classList.remove(classname);
}

function addClassToElement(element, classname) {
	element.className += " " + classname;
}

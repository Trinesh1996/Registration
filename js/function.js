// Get DOM Elements

var textBox = document.querySelector(".regText")
var dropDown = document.querySelector(".dropdown-hover")
var addBtn = document.querySelector(".button-primary.add")
var removeBtn = document.querySelector(".button-primary.remove")
var format = document.querySelector(".button-primary.regFormat")
var plateElem = document.querySelector(".row.labels")
var mainDiv2 = document.querySelector(".main-2")
var errorMsg = document.querySelector(".errorMsg")
var errorMsg2 = document.querySelector(".errorMsg-2")

// console.log(textBox)
// console.log(dropDown)
// console.log(addBtn)
// console.log(removeBtn)
// console.log(plate)
mainDiv2.innerHTML = "";
plateElem.innerHTML = "";


// remember
// JSON.parse takes a string and transforms it into an object
// JSON.stringify takes an object and transforms it into a string



function functionality(storedData){
	// gloabal variables
	var regNumber = ""
	var local = storedData || {}


	function regValue(value) {
		if(value.startsWith('CA') || value.startsWith('CL') || value.startsWith('CJ') || value.startsWith("CA")){
			regNumber = value;
		}
	}

	function returnReg(){
		return regNumber
}

	function map(){
		if(local[regNumber] === undefined){
			local[regNumber] = 0
		}
	}

	function retMap(){
		return local
	}

	function mapping(){
		return Object.keys(regNumber)
	}

	function clearMe(){
		return local = {}
	}
	return{
		reg: regValue,
		regNo: returnReg,
		localMap: map,
		localRet: retMap,
		maps: mapping,
		localRet: retMap,
		clearIt: clearMe,
	}
}

// Local storage and event listener functions

var storedObjects = localStorage.getItem('Registration') ? JSON.parse(localStorage.getItem('Registration')) : {};
var instance = functionality(storedObjects);

addBtn.addEventListener("click", add);
function add() {
	var textVal = textBox.value
	if(textVal === undefined || textVal == ""){
		return errorMsg.innerHTML = "Enter a valid registration number"
	}
}



function clears(){
	instance.clearIt();
	localStorage.clear()
	location.reload();
}

removeBtn.addEventListener('click', clears)

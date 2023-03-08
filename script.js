let rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
let arr = [];
while(arr.length < 30) {
    let n = rand(0, 99);
    arr.push(n);
}
console.log(arr)


let div_table = document.querySelector('#table');
let div_button = document.querySelector('#button')

for (let i = 0; i < 5; i++) {
	
    let tr = document.createElement('tr');
	
	for (let i = 0; i < 6; i++) {
		let td = document.createElement('td');
		tr.appendChild(td);
	}
	
	table.appendChild(tr);
}

function fill() {
    let elems = document.querySelectorAll('td')
    for (let j=0; j<arr.length; j++) {
        elems[j].innerText=arr[j]
        if (arr[j]>=50){
            elems[j].style.backgroundColor = 'orange'
        }
    }

}

fill()

let btn = document.createElement('button')
btn.innerText = 'Добавить число'
div_button.appendChild(btn)

btn.onclick = foo

function foo(){
    let elems = document.querySelectorAll('td')
    //console.log(elems)
    let random_value = Math.floor(Math.random() * 100)
    if (elems.length % 6 == 0){
        new_row = document.createElement('tr')
        table.appendChild(new_row)
        new_cell = document.createElement('td')
        table.appendChild(new_cell)
        elems = document.querySelectorAll('td')
        elems[elems.length-1].innerText = random_value
        if (random_value >=50){
            elems[elems.length-1].style.backgroundColor = "orange" 
        }
    }
    else {
        new_cell = document.createElement('td')
        table.appendChild(new_cell)
        elems = document.querySelectorAll('td')
        elems[elems.length-1].innerText = random_value
        if (random_value >=50){
            elems[elems.length-1].style.backgroundColor = "orange" 
        }
    }
}


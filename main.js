
let myJSON;
let input;
let tbody;
let tr;

function btn(){
   input ={name:`${document.getElementById('name').value}` , 
    number:`${document.getElementById('number').value}`}
    myJSON =  JSON.stringify(input);  

}

function output(){

    
    console.log(myJSON)
    document.getElementById('show').value= myJSON;
}
 function add(){
     tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let remove = document.createElement('button');
    let remove_text = document.createTextNode('delete');
    let name = document.createTextNode(`${input.name}`);
    let number = document.createTextNode(`${input.number}`);
    let tbody = document.querySelector('tbody');
    remove.setAttribute("onclick","remove()");
    remove.appendChild(remove_text);
    td1.appendChild(name)
    td2.appendChild(number)
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(remove)
    tbody.appendChild(tr);
    console.log(`${myJSON.name}`);
    console.log(`${myJSON.number}`);
    console.log(tr);
    console.log(name);
    console.log(number);
    console.log(table);
 }

 function remove (){
  let remove_tbody=document.querySelector('tbody');
  console.log(remove_tbody.childNodes);
    remove_tbody.removeChild(remove_tbody.childNodes[0]);
 }
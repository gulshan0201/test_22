let addbtn = document.getElementById('add');
let container = document.getElementById('todocontainer');
let input = document.getElementById('inputField');

addbtn.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = input.value; 
    container.appendChild(paragraph);
    input.value="";
    paragraph.addEventListener('click', function(){
      paragraph.style.textDecoration= 'line-through';
    })
    paragraph.addEventListener('dblclick', function(){
      container.removeChild(paragraph);
    })
})
let submit=document.querySelector(".submit");
let blogsElem=document.querySelector('.blogs');
let title=document.querySelector("#text");
let desc=document.querySelector('#desc');
let blogs=JSON.parse(localStorage.getItem("blogs"));
if(blogs){
    blogs.forEach(element => {
        addBlogs(element)
    });
}
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    addBlogs()
})
function addBlogs(obj) {
    let card=document.createElement("div");
    card.classList.add("card");
    let titleval=title.value;
    let descVal=desc.value;
    if(obj){
        titleval=obj.title;
        descVal=obj.desc;
    }
    if(titleval){
        card.innerHTML=`<h3>${titleval}</h3>
                                    <p class="ptag">${descVal}</p>
                             <button class="del">Delete</button>
                             <button class= "edit">Edit</button>`;
        blogsElem.appendChild(card);
        updateLs()
    }
    let del=card.querySelector(".del");
    del.addEventListener('click', ()=> {
        card.remove();
        updateLs();
    })
    
}
function updateLs() {
    let card=document.querySelectorAll(".card");
    let arr=[];
    card.forEach(element => {
        arr.push({
            title:element.children[0].innerText,
            desc:element.children[1].innerText
        })
    });
    localStorage.setItem("blogs", JSON.stringify(arr));
}
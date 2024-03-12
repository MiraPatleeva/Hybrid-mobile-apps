function search() {
    let list = document.querySelectorAll("li");
let search = document.getElementById("searchText");
let result = document.getElementById("result");

let count = 0;

    for(let i = 0; i < list.length; i++){
        list[i].style.fontWeight = 'normal';
}

for(let i = 0; i < list.length; i++){
    if(list[i].innerText.includes(search.value)){
        list[i].style.fontWeight = 'bold';
        count++;
    }
}
    result.innerText= `${count} matches found`;
    search.value = "";
  
    
}
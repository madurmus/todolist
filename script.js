// ! Önyüze Görev Ekletmek İçin;
const searchInput = document.querySelector("#searchInput");
const btnEkle = document.querySelector("#btnEkle");
const ul = document.querySelector("#todoListesi");
const searchFilter = document.querySelector("#searchFilter");

const önYüzeEkle = () => {
    let searchText = searchInput.value;
    // console.log(searchText.length);

    if(searchText.trim().length != 0){
        ul.innerHTML += `
        <li class="list-item list-unstyled border border-bottom p-2 my-2">${searchText}
            <i class="fa-solid fa-circle-xmark float-end mt-1"></i>
        </li>
        `
    
        searchInput.value = "";
    }else{
        alert("Görev bölümü boş bırakılamaz!")
    }

}

btnEkle.addEventListener("click", önYüzeEkle)

searchInput.addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        önYüzeEkle();
    }
})


// ! Tıklanan Elemanı sildirmek için;

const önYüzdenSil = (e) => {
    // console.log(e.target);
    const li = e.target.parentElement;
    // console.log(li)
    if(e.target.className.includes("fa-solid")){
        li.style.display = "none";
    }
}

ul.addEventListener("click", önYüzdenSil);


// ! Temizle butonuna bastığımda tüm içeriği temizlesin;
const btnTemizle = document.querySelector("#btnTemizle");

btnTemizle.addEventListener("click", function(){
    ul.innerHTML = "";
})

searchFilter.addEventListener("input", function(){
    let searchTerm = searchFilter.value.trim().toLowerCase();

    let items = ul.querySelectorAll("li");

    // console.log(items);

    for(let i =0; i < items.length; i++){
        let item = items[i];
        let text = item.innerHTML.trim().toLowerCase();
        
        if(text.startsWith(searchTerm)){
            item.style.display = "block"
        }else {
            item.style.display = "none"
        }
    }

})
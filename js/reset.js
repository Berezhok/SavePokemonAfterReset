const resetPage = document.querySelector(".resetPage");

resetPage.addEventListener("click", (event) =>{
        localStorage.removeItem("pokemon");
        location.reload();
})
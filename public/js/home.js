const greeting = document.querySelector('.greeting');
const startQuizButton = document.querySelector('.start-quiz-button');
const submitBtn = document.querySelector('.submit-btn');
const searchInput = document.querySelector('.searchInput');
const searchBtn = document.querySelector('.search-btn');

startQuizButton.addEventListener('click', function() {
    const elementValue = document.getElementById("genreTypeSelect");
    const genreValue = elementValue.options[elementValue.selectedIndex].value;
    window.location.href = `quiz.html?genreValue=${genreValue}`;
    
});

searchBtn.addEventListener('click', function() {
    const searchValue = searchInput.value;
    window.location.href = `book.html?searchValue=${searchValue}`;
})


window.onload = () => {
    if(!sessionStorage.name){
        location.href = '/login';
    } else {
        // greeting.innerHTML = 'hello ${sessionStorage.name}';
    }
}

const logOut = document.querySelector('.logout');

logOut.addEventListener('click', () => {
    sessionStorage.clear();
    location.reload();
})
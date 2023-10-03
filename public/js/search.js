const urlParams = new URLSearchParams(window.location.search);
const searchValue = urlParams.get('searchValue');
console.log(searchValue)

const loadBooks = () => {
    const apiUrl = `http://openlibrary.org/search.json?q=${searchValue}`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const booksContainer = document.getElementById("books");
            booksContainer.innerHTML = "";

            const docs = data.docs;

            docs.forEach((book) => {
                const bookDiv = document.createElement("div");
                bookDiv.classList.add("book");

                const title = document.createElement("h3");
                title.textContent = book.title;

                const author = document.createElement("p");
                author.textContent = `Author: ${book.author_name ? book.author_name.join(', ') : 'Unknown'}`;

                const coverId = book.cover_i || 0;
                const coverUrl = `http://covers.openlibrary.org/b/id/${coverId}-M.jpg`;

                const img = document.createElement("img");
                img.src = coverUrl;
                img.alt = book.title;

                bookDiv.appendChild(img);
                bookDiv.appendChild(title);
                bookDiv.appendChild(author);

                booksContainer.appendChild(bookDiv);
            });
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

loadBooks()
const closeButton = document.querySelector('.close-button');


closeButton.addEventListener('click', () => {
    window.location.href = 'index.html';
})
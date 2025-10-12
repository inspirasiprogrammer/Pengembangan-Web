import AuthorData from './AuthorData.js';

const authordata = new AuthorData();
let currentPage = 1;

async function show(page = 1) {
    try {
        const data = await authordata.getAuthorData(page, 1);
        authordata.displayAuthor(data[0]);
    } catch (error) {
        console.log(error);
    }
}

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        show(currentPage);
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentPage++;
    show(currentPage);
});

// Inisialisasi tampilan pertama
show(currentPage);
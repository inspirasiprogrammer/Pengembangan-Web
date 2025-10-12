import AuthorData from './AuthorData.js';

let authordata = new AuthorData();
let currentPage = 1;

const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const authorName = document.getElementById('authorName');
const dataTbody = document.getElementById('data');

async function show(page = 1) {
    try {
        const data = await authordata.getAuthorData(page, 1);
        dataTbody.innerHTML = '';
        if (data.length > 0) {
            authorName.textContent = data[0].author;
            dataTbody.innerHTML = `<tr>
                <td align="center"><img src="${data[0].download_url}" alt="${data[0].author}" width="300"></td>
                <td align="center">${data[0].author}</td>
            </tr>`;
        } else {
            authorName.textContent = 'Tidak ada data';
        }
    } catch (error) {
        authorName.textContent = 'Gagal memuat data';
        dataTbody.innerHTML = '';
        console.log(error);
    }
}

btnPrev.onclick = () => {
    if (currentPage > 1) {
        currentPage--;
        show(currentPage);
    }
};
btnNext.onclick = () => {
    currentPage++;
    show(currentPage);
};

show(currentPage);
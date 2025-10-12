class AuthorData {
    constructor() {
        this.baseUrl = "https://picsum.photos/v2/list";
    }

    async getAuthorData(page = 1, limit = 1) {
        const url = `${this.baseUrl}?page=${page}&limit=${limit}`;
        let result = await fetch(url);
        if (!result.ok) {
            throw new Error(`Gagal memuat data author. Status : ${result.status}`);
        }
        return await result.json();
    }

    displayAuthor(author) {
        // author: object tunggal
        const img = document.getElementById("authorImg");
        const name = document.getElementById("authorName");
        if (author) {
            img.src = author.download_url;
            name.textContent = author.author;
        } else {
            img.src = "";
            name.textContent = "";
        }
    }
}

export default AuthorData;
class AuthorData {
    constructor() {
        this.baseUrl = "https://picsum.photos/v2/list";
    }

    async getAuthorData(page = 1, limit = 1) {
        const url = `${this.baseUrl}?page=${page}&limit=${limit}`;
        const result = await fetch(url);
        if (!result.ok) {
            throw new Error(`Gagal memuat data author. Status : ${result.status}`);
        }
        return await result.json();
    }
}

export default AuthorData;
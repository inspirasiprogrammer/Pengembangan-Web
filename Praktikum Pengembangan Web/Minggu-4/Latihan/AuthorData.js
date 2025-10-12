class AuthorData{
    constructor(){
        this.url = "https://picsum.photos/v2/list";
    }

    async getAuthorData(){
        let result = await fetch(this.url);
        if(!result.ok){
            throw new Error(`Gagal memuat data author. Status : ${result.status}`);
        }

        return await result.json();
    }

    displayAuthor(data){
        let konten = document.getElementById("data");
        data.forEach(author => {
            konten.innerHTML += `<tr>
                <td align="center"><img src="${author.download_url}" width=200></td>
                <td align="center">${author.author}</td>
            </tr>`;
        });
    }
}

export default AuthorData;
import AuthorData from './AuthorData.js';

let authordata = new AuthorData();

function show() {
    console.log(authordata);
    authordata.getAuthorData()
        .then(data => {
            authordata.displayAuthor(data);
        })
        .catch(error => console.log(error));
}

show();
    document.title = "Memori";
    let tanggal = document.getElementById("tgl");
    tanggal.innerHTML += new Date(Date.now()).toLocaleDateString();

    let web = {
        title: "Memori",
        data: "Memori adalah urutan byte yang berisi sepotong kecil informasi. Informasi ini mungkin menjadi perintah untuk mengatakan pada computar apa yang harus dilakukan. Sel mungkin berisi data yang diperlukan computar untuk melakukan suatu perintah. Setiap slot mungkin berisi salah satu, dan apa yang sekarang menjadi data mungkin saja kemudian menjadi perintah. Ukuran masing-masing sel, dan jumlah sel, berubah secara hebat dari computar ke computar, dan teknologi dalam pembuatan memori sudah berubah secara hebat - dari relay elektromekanik, ke tabung yang diisi dengan air raksa di mana pulsa akustik terbentuk, sampai matriks magnet permanen, ke setiap transistor, ke sirkuit terpadu dengan jutaan transistor di atas satu chip silikon."
    };

    let judul = document.getElementById("title");
    let konten = document.getElementsByClassName("content");

    judul.innerHTML = web.title;
    konten[0].innerHTML = web.data;

    let count = document.getElementById("count");
    let kalimat = web.data.split(".").length - 1;
    count.innerHTML += kalimat;
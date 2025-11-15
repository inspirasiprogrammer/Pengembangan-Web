// public/script.js

document.addEventListener('DOMContentLoaded', () => {
    const galeriContainer = document.getElementById('galeri-container');

    // Fungsi untuk memuat dan menampilkan komentar dari backend 
    const muatKomentar = async (photoId, commentListElement) => {
        try {
            const response = await fetch(`/api/komentar/${photoId}`); 
            const comments = await response.json();

            commentListElement.innerHTML = ''; // Mengosongkan daftar komentar sebelumnya
            if (comments.length === 0) {
                commentListElement.innerHTML = '<li>Belum ada komentar.</li>';
            } else {
                comments.forEach(comment => {
                    const li = document.createElement('li');
                    li.textContent = comment.isi_komentar;
                    commentListElement.appendChild(li); 
                });
            }
        } catch (error) {
            console.error('Gagal memuat komentar:', error);
        }
    };

    // Fungsi utama untuk mengambil data foto dan membangun galeri
    const muatFoto = async () => {
        try {
            const response = await fetch('https://picsum.photos/v2/list?page=1&limit=6');
            if (!response.ok) {
                throw new Error('Gagal mengambil data foto dari API.');
            }
            const photos = await response.json();

            galeriContainer.innerHTML = '';

            photos.forEach(photo => {
                // Membuat elemen secara dinamis (DOM Manipulation)
                const card = document.createElement('div');
                card.className = 'photo-card';

                const img = document.createElement('img');
                img.src = photo.download_url;
                img.alt = `Foto oleh ${photo.author}`;

                const author = document.createElement('p');
                author.className = 'author-name';
                author.textContent = `Oleh: ${photo.author}`;

                // Area untuk menampilkan komentar
                const commentSection = document.createElement('div');
                commentSection.className = 'comment-section';
                const commentList = document.createElement('ul');

                // Form untuk menambah komentar baru
                const form = document.createElement('form');
                const input = document.createElement('input');
                input.type = 'text';
                input.placeholder = 'Tulis komentar...';
                input.required = true;
                const button = document.createElement('button');
                button.type = 'submit';
                button.textContent = 'Kirim';
                
                form.append(input, button);
                commentSection.append(commentList, form);
                card.append(img, author, commentSection);
                galeriContainer.appendChild(card);

                // Panggil fungsi untuk memuat komentar yang sudah ada
                muatKomentar(photo.id, commentList);

                // Menambahkan Event Handler untuk form submit
                form.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    
                    const isiKomentar = input.value;
                    if (!isiKomentar.trim()) return;

                    await fetch('/api/komentar', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({ photo_id: photo.id, isi_komentar: isiKomentar })
                    });
                    
                    input.value = '';
                    muatKomentar(photo.id, commentList);
                });
            });

        } catch (error) {
            galeriContainer.textContent = 'Gagal memuat galeri. Silakan coba lagi nanti.';
            console.error('Terjadi kesalahan:', error);
        }
    };

    muatFoto();
});
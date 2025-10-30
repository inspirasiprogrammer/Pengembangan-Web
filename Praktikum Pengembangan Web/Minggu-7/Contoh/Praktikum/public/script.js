// public/script.js

// Pastikan DOM sudah siap sebelum menjalankan script
document.addEventListener('DOMContentLoaded', () => {
    const postinganContainer = document.getElementById('postingan-container');

    // Fungsi untuk memuat tanggapan dari backend kita
    const muatTanggapan = async (postId, elemenTanggapanList) => {
        try {
            const response = await fetch(`/api/tanggapan/${postId}`);
            const daftarTanggapan = await response.json();

            // Kosongkan daftar tanggapan sebelum diisi ulang
            elemenTanggapanList.innerHTML = '';

            if (daftarTanggapan.length === 0) {
                elemenTanggapanList.innerHTML = '<p>Belum ada tanggapan.</p>';
            } else {
                daftarTanggapan.forEach(tanggapan => {
                    const item = document.createElement('div');
                    item.className = 'tanggapan-item';
                    item.textContent = tanggapan.isi_tanggapan;
                    elemenTanggapanList.appendChild(item);
                });
            }
        } catch (error) {
            console.error('Gagal memuat tanggapan:', error);
            elemenTanggapanList.innerHTML = '<p>Gagal memuat tanggapan.</p>';
        }
    };

    // Fungsi utama untuk memuat postingan dari API eksternal
    const muatPostingan = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=8');
            const daftarPostingan = await response.json();

            daftarPostingan.forEach(post => {
                // Buat elemen utama untuk setiap postingan
                const postItem = document.createElement('div');
                postItem.className = 'post-item';

                // Buat elemen-elemen di dalam postingan
                const postTitle = document.createElement('h3');
                postTitle.textContent = post.title;

                const postBody = document.createElement('p');
                postBody.textContent = post.body;

                const tanggapanSection = document.createElement('div');
                tanggapanSection.className = 'tanggapan-section';

                const tanggapanList = document.createElement('div');
                tanggapanList.className = 'tanggapan-list';

                const tanggapanForm = document.createElement('form');
                
                const inputTanggapan = document.createElement('input');
                inputTanggapan.type = 'text';
                inputTanggapan.placeholder = 'Tulis tanggapan...';
                
                const submitButton = document.createElement('button');
                submitButton.type = 'submit';
                submitButton.textContent = 'Kirim';
                
                // Tambahkan event listener untuk form submit
                tanggapanForm.addEventListener('submit', async (event) => {
                    event.preventDefault();
                    const isiTanggapan = inputTanggapan.value.trim();

                    if (isiTanggapan) {
                        try {
                            await fetch('/api/tanggapan', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    post_id: post.id,
                                    isi_tanggapan: isiTanggapan
                                }),
                            });
                            // Kosongkan input dan muat ulang tanggapan
                            inputTanggapan.value = '';
                            muatTanggapan(post.id, tanggapanList);
                        } catch (error) {
                            console.error('Gagal mengirim tanggapan:', error);
                        }
                    }
                });

                // Susun semua elemen
                tanggapanForm.appendChild(inputTanggapan);
                tanggapanForm.appendChild(submitButton);

                tanggapanSection.appendChild(tanggapanList);
                tanggapanSection.appendChild(tanggapanForm);
                
                postItem.appendChild(postTitle);
                postItem.appendChild(postBody);
                postItem.appendChild(tanggapanSection);

                postinganContainer.appendChild(postItem);

                // Panggil fungsi untuk memuat tanggapan untuk postingan ini
                muatTanggapan(post.id, tanggapanList);
            });

        } catch (error) {
            console.error('Gagal memuat postingan:', error);
            postinganContainer.innerHTML = '<p>Maaf, gagal memuat postingan. Coba lagi nanti.</p>';
        }
    };

    // Panggil fungsi utama untuk memulai aplikasi
    muatPostingan();
});
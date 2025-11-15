// public/script.js

document.addEventListener('DOMContentLoaded', () => {
    const acaraContainer = document.getElementById('acara-container');

    // Fungsi untuk memuat dan menampilkan rata-rata peringkat dari backend
    const muatPeringkat = async (showId, ratingElement) => { 
        try {
            const response = await fetch(`/api/peringkat/${showId}`); 
            const data = await response.json();
            ratingElement.textContent = `Peringkat: ${data.average_rating} / 5.0`;
        } catch (error) {
            ratingElement.textContent = 'Peringkat: -';
            console.error('Gagal memuat peringkat:', error);
        }
    };

    // Fungsi utama untuk mengambil data acara TV dan membangun galeri
    const muatAcaraTV = async () => {
        try {
            const response = await fetch('https://api.tvmaze.com/shows?page=1'); 
            if (!response.ok) throw new Error('Gagal mengambil data acara TV.');
            
            const shows = await response.json();
            acaraContainer.innerHTML = '';

            const showsToDisplay = shows.slice(0, 10); // Ambil 10 item pertama

            showsToDisplay.forEach(item => {
                const show = item;

                // Membuat elemen secara dinamis (DOM Manipulation)
                const card = document.createElement('div');
                card.className = 'show-card';

                const img = document.createElement('img');
                img.src = show.image ? show.image.medium : 'https://via.placeholder.com/210x295.png?text=No+Image';
                img.alt = `Poster for ${show.name}`;

                const title = document.createElement('h3');
                title.textContent = show.name;

                const ratingDisplay = document.createElement('div');
                ratingDisplay.className = 'rating-display';

                const form = document.createElement('form');
                const select = document.createElement('select');
                for (let i = 1; i <= 5; i++) {
                    const option = document.createElement('option');
                    option.value = i;
                    option.textContent = `${i} Bintang`;
                    select.appendChild(option);
                }

                const button = document.createElement('button');
                button.type = 'submit';
                button.textContent = 'Beri Peringkat';
                
                form.append(select, button);
                card.append(img, title, ratingDisplay, form);
                acaraContainer.appendChild(card);
                
                muatPeringkat(show.id, ratingDisplay); // Panggil fungsi untuk memuat peringkat awal

                form.addEventListener('submit', async (e) => { 
                    e.preventDefault();

                    const nilaiPeringkat = select.value;
                    
                    await fetch('/api/peringkat', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({ show_id: show.id, nilai_peringkat: nilaiPeringkat })
                    });

                    muatPeringkat(show.id, ratingDisplay); // Refresh tampilan peringkat
                });
            });

        } catch (error) {
            acaraContainer.textContent = 'Gagal memuat daftar acara TV.';
            console.error('Terjadi kesalahan:', error);
        }
    };

    muatAcaraTV();
});
// Menunggu halaman HTML selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    
    // Ambil data dari API yang kita buat di index.js
    fetch('/db/customers')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#customer-table tbody');
            tableBody.innerHTML = ''; // Kosongkan tabel

            // Loop setiap data dan buat baris baru di tabel
            data.forEach(customer => {
                let row = tableBody.insertRow();

                let cellId = row.insertCell(0);
                let cellName = row.insertCell(1);
                let cellCity = row.insertCell(2);

                cellId.textContent = customer.cust_id;
                cellName.textContent = customer.cust_name;
                cellCity.textContent = customer.cust_city;
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            const tableBody = document.querySelector('#customer-table tbody');
            tableBody.innerHTML = '<tr><td colspan="3">Gagal memuat data.</td></tr>';
        });
});
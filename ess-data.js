/* Data journey ESS Self Assessment — dipakai bersama oleh index.html (halaman Hasil) dan ess.html (halaman RA).
   Mau menambah / mengubah journey atau poin: edit di file ini saja, lalu upload ulang. */
const ESS_SEC = 180; /* waktu minimal per slide (detik) */
const ESS_J = [
  { id: 'F', tp: 'Touchpoint 06 • Pengalaman Mencoba Produk', q: 'Kalau ada customer lagi lihat-lihat jaket terus kelihatan tertarik, menurut Bapak/Ibu urutan idealnya RA ngapain aja?', pts: [
    [1, 'RA menawarkan pelanggan untuk mencoba produk yang diminati (inisiatif RA, bukan menunggu diminta)'],
    [2, 'RA menawarkan bantuan untuk mencoba produk - berlaku untuk tas, jaket, sepatu, helm, jas hujan, tenda'],
    [3, 'RA memberikan tanggapan / masukan yang relevan terhadap produk yang dicoba'],
    [4, 'Fitting room bersih, rapi, terawat, kunci pintu berfungsi, lampu menyala warna putih terang']] },
  { id: 'G', tp: 'Touchpoint 07 • Rekomendasi Untuk Membeli Produk', q: 'Kalau customer udah mantap mau beli, sebelum ke kasir idealnya RA ngapain aja?', pts: [
    [5, 'RA meminta customer mengecek kembali produk yang akan dibeli + menginformasikan fitur yang perlu dicek'],
    [6, 'RA menjelaskan cara perawatan produk SECARA SPONTAN (tanpa ditanya / tanpa dipancing)'],
    [7, 'RA menawarkan produk tambahan sesuai kebutuhan (Cross/Up Selling / Eigerindo Voucher / EASAP)'],
    [8, 'RA berinisiatif memberitahu aktivitas promosi yang berlaku & relevan dengan kebutuhan pelanggan'],
    [9, 'RA bertanya apakah pelanggan sudah memiliki member Eiger (EAC)'],
    [10, 'Jika belum member: RA memandu pendaftaran via EIGER Adventure Mobile Apps / website + menanyakan nama, lalu mulai memanggil pakai nama'],
    [11, 'Jika belum / tidak bersedia member: RA menjelaskan manfaat menjadi member'],
    [12, 'RA memberikan nomor transaksi untuk lanjut ke pembayaran (khusus Flagship)']] }
];

const faktaList = [
    "Gnu/Linux adalah sistem oprasi open source gabungan dari proyek GNU dan kernel linux, kernel linux terinspirasi dari os minix unix-like yang pada awalnya kernel linux di buat dengan alasan just for fun, ",
    "karena kernel linux itu tidak sepenuh nya menjadi sistem oprasi yang lengkap.kemudian Linus Torvalds mencabangkan dengan program utilitas dan alat dari proyek GNU open source software/free software yang didirikan oleh Richard Stallman",
    "penggabungan antara kernel linux dan GNU yang kemudian membentuk sistem operasi GNU/linux yang lengkap sejak saat itu gnu/linux mulai berkembang pesat melalui kolaborasi komunitas dan pengembangan global",
    "distro linux itu sendiri adalah sebuah solusi terhadap kerumitan saat instalasi dan konfigurasi  dan ini mendorong para developer untuk mengemas kernel linux bersama dengan semua software pendukung untuk memunuhi berbagai kebutuah spesifik dan proses inilah yang melahirkan distro linux",
    "untuk  mengetahui ada berapa banyak distro linux baik ikm search aja di google",
];

let faktaIndex = 0;

function gantiFakta(idKotak) {

    const kotak = document.getElementById(idKotak);

    const isiFakta = kotak.querySelector('.isi-fakta');

    faktaIndex = (faktaIndex + 1) % faktaList.length;
    isiFakta.innerHTML = faktaList[faktaIndex];
}
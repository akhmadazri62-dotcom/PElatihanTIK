// 1. pilih tombol berdasarkan ID-NYS
cons tombolsapa = document.getElemenById('sapabutton');
// 2. tambahan 'event listener'untuk aksi 'click'
tombolsapa,addEventlistener('click', function() {
    // 3. jalankan kode ini ketika tombol di link
    alert('Halo! terima kasih sudah berkunjung!');
});

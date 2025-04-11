function formatRupiah(input) {
    input.value = input.value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function hitungDiskon() {
    let harga = parseInt(document.getElementById("harga").value.replace(/\./g, '')) || 0;
    let diskonPersen = parseInt(document.getElementById("diskonPersen").value) || 0;

    if (harga <= 0) {
        alert("Harga tidak boleh kosong atau 0!");
        return;
    }

    if (diskonPersen > 100) {
        alert("Diskon persen tidak boleh lebih dari 100%");
        return;
    }

    let potonganPersen = harga * (diskonPersen / 100);
    let hargaSetelahDiskon = harga - potonganPersen;

    if (hargaSetelahDiskon < 0) {
        alert("Total diskon melebihi harga barang! Periksa kembali input diskon.");
        return;
    }

    document.getElementById("hasil").innerHTML = 
        `<p>Harga Awal: Rp ${new Intl.NumberFormat('id-ID').format(harga)}</p>
         <p>Diskon: ${diskonPersen}% (Rp ${new Intl.NumberFormat('id-ID').format(potonganPersen)})</p>
         <p><strong>Harga Setelah Diskon: Rp ${new Intl.NumberFormat('id-ID').format(hargaSetelahDiskon)}</strong></p>`;
}
function hitungTotal() {
    let jumlah = document.getElementById("jumlah").value;
    let harga = 12000; // Harga per porsi Rp 12.000
    let total = jumlah * harga;
    document.getElementById("total").innerText = total;
}

// Event listener agar total otomatis dihitung saat input berubah
document.getElementById("jumlah").addEventListener("input", hitungTotal);

function updatePembayaran() {
    let ewallet = document.getElementById("ewallet").value;
    let infoPembayaran = document.getElementById("info-pembayaran");
    let detailPembayaran = document.getElementById("detail-pembayaran");

    let nomorEwallet = {
        "gopay": "Gopay: 0821-7236-4428",
        "ovo": "OVO: 0821-7236-4428",
        "dana": "Dana: 0821-7236-4428"
    };

    if (ewallet) {
        infoPembayaran.innerHTML = `<strong>${nomorEwallet[ewallet]}</strong>`;
        detailPembayaran.classList.remove("hidden");
    } else {
        detailPembayaran.classList.add("hidden");
    }
}

function pesan() {
    let jumlah = document.getElementById("jumlah").value;
    let totalHarga = document.getElementById("total").innerText;
    let ewallet = document.getElementById("ewallet").value;
    let buktiPembayaran = document.getElementById("bukti-pembayaran").files[0];
    let notifikasi = document.getElementById("notifikasi");

    if (jumlah == "0" || jumlah == "") {
        alert("Silakan pilih jumlah Dimsum Ayam terlebih dahulu!");
        return;
    }

    if (ewallet === "") {
        alert("Silakan pilih metode E-Wallet!");
        return;
    }

    if (!buktiPembayaran) {
        alert("Silakan upload bukti pembayaran sebelum melanjutkan!");
        return;
    }

    alert("Pesanan Anda berhasil dibuat! Silakan transfer ke nomor yang tertera.");

    // Tampilkan notifikasi pesanan berhasil
    notifikasi.classList.remove("hidden");
}

// Preview gambar bukti pembayaran
document.getElementById("bukti-pembayaran").addEventListener("change", function(event) {
    let file = event.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let preview = document.getElementById("preview");
            preview.innerHTML = `<img src="${e.target.result}" alt="Bukti Pembayaran">`;
        };
        reader.readAsDataURL(file);
    }
});

class Item {
  constructor(id, nama, jumlah, deskripsi, gambar) {
    this.id = id;
    this.nama = nama;
    this.jumlah = jumlah;
    this.deskripsi = deskripsi;
    this.gambar = gambar;
  }

  toSerializableObject() {
    return {
      id: this.id,
      nama: this.nama,
      jumlah: this.jumlah,
      deskripsi: this.deskripsi,
      gambar: this.gambar,
    };
  }
}

export default Item;

class ReservationItem {
  constructor(nama, jumlah) {
    this.nama = nama;
    this.jumlah = jumlah;
  }

  toSerializableObject() {
    return {
      nama: this.nama,
      jumlah: this.jumlah,
    };
  }
}

export default ReservationItem;

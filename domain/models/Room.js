class Room {
  constructor(id, nama, deskripsi, kapasitas, foto) {
    this.id = id;
    this.nama = nama;
    this.deskripsi = deskripsi;
    this.kapasitas = kapasitas;
    this.foto = foto;
  }

  toSerializableObject() {
    return {
      id: this.id,
      nama: this.nama,
      deskripsi: this.deskripsi,
      kapasitas: this.kapasitas,
      foto: this.foto,
    };
  }
}

export default Room;

class Reservation {
  constructor(
    id,
    namaPeminjam,
    namaAcara,
    peralatanDipinjam,
    ruanganDipinjam,
    tanggalAwal,
    waktuAwal,
    tanggalAkhir,
    waktuAkhir,
    status
  ) {
    this.id = id;
    this.namaPeminjam = namaPeminjam;
    this.namaAcara = namaAcara;
    this.peralatanDipinjam = peralatanDipinjam;
    this.ruanganDipinjam = ruanganDipinjam;
    this.tanggalAwal = tanggalAwal;
    this.waktuAwal = waktuAwal;
    this.tanggalAkhir = tanggalAkhir;
    this.waktuAkhir = waktuAkhir;
    this.status = status;
  }

  toSerializableObject() {
    return {
      id: this.id,
      namaPeminjam: this.namaPeminjam,
      namaAcara: this.namaAcara,
      peralatanDipinjam: this.peralatanDipinjam,
      ruanganDipinjam: this.ruanganDipinjam,
      tanggalAwal: this.tanggalAwal,
      waktuAwal: this.waktuAwal,
      tanggalAkhir: this.tanggalAkhir,
      waktuAkhir: this.waktuAkhir,
      status: this.status,
    };
  }
}

export default Reservation;

import Reservation from "../../domain/models/Reservation";
import ReservationItem from "../../domain/models/ReservationItem";

const peminjamanList = [
  // Data yang telah Anda sediakan
  new Reservation(
    "001",
    "John Doe",
    "Seminar Teknologi",
    [
      { nama: "Laptop", jumlah: 1 },
      { nama: "Proyektor", jumlah: 1 },
    ],
    ["1", "2"],
    "2023-01-01",
    "00:00",
    "2023-01-02",
    "23:59",
    "Diajukan"
  ),
  new Reservation(
    "002",
    "Jane Smith",
    "Workshop Seni",
    [
      { nama: "Laptop", jumlah: 1 },
      { nama: "Proyektor", jumlah: 1 },
    ],
    ["3"],
    "2023-02-01",
    "00:00",
    "2023-02-03",
    "23:59",
    "Diajukan"
  ),
  new Reservation(
    "003",
    "Bob Johnson",
    "Rapat Koordinasi",
    [
      { nama: "Laptop", jumlah: 1 },
      { nama: "Proyektor", jumlah: 1 },
    ],
    ["4"],
    "2023-03-01",
    "00:00",
    "2023-03-02",
    "23:59",
    "Ditolak"
  ),

  // Data tambahan
  new Reservation(
    "004",
    "Alice Brown",
    "Acara Musik",
    [
      { nama: "Laptop", jumlah: 1 },
      { nama: "Proyektor", jumlah: 1 },
    ],
    ["5"],
    "2023-04-01",
    "00:00",
    "2023-04-02",
    "23:59",
    "Diajukan"
  ),
  new Reservation(
    "005",
    "Alice Brown",
    "Diskusi Komunitas",
    [
      { nama: "Laptop", jumlah: 1 },
      { nama: "Proyektor", jumlah: 1 },
    ],
    ["6"],
    "2023-05-01",
    "00:00",
    "2023-05-02",
    "23:59",
    "Disetujui"
  ),
  new Reservation(
    "006",
    "DJane Smith",
    "Pertandingan Olahraga",
    [
      { nama: "Laptop", jumlah: 1 },
      { nama: "Proyektor", jumlah: 1 },
    ],
    ["7"],
    "2023-06-01",
    "00:00",
    "2023-06-02",
    "23:59",
    "Selesai"
  ),
  new Reservation(
    "007",
    "Alice Brown",
    "Sosialisasi Kesehatan",
    [
      { nama: "Laptop", jumlah: 1 },
      { nama: "Microphone", jumlah: 1 },
    ],
    ["8"],
    "2023-07-01",
    "00:00",
    "2023-07-02",
    "23:59",
    "Ditolak"
  ),
  new Reservation(
    "008",
    "Alice Brown",
    "Ujian Online",
    [
      { nama: "Whiteboard", jumlah: 1 },
      { nama: "Microphone", jumlah: 1 },
    ],
    ["9"],
    "2023-08-01",
    "00:00",
    "2023-08-02",
    "23:59",
    "Diajukan"
  ),
  new Reservation(
    "009",
    "John Doe",
    "Seminar Keuangan",
    [
      { nama: "Komputer", jumlah: 1 },
      { nama: "Whiteboard", jumlah: 2 },
    ],
    ["1"],
    "2023-09-01",
    "00:00",
    "2023-09-02",
    "23:59",
    "Disetujui"
  ),
  new Reservation(
    "010",
    "John Doe",
    "Pertunjukan Teater",
    [
      { nama: "Microphone", jumlah: 1 },
      { nama: "Tables", jumlah: 1 },
    ],
    ["9"],
    "2023-10-01",
    "00:00",
    "2023-10-02",
    "23:59",
    "Selesai"
  ),
];

export default peminjamanList;

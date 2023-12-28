import Reservation from "../../domain/models/Reservation";
import ReservationItem from "../../domain/models/ReservationItem";

const peminjamanList = [
  // Data yang telah Anda sediakan
  new Reservation(
    "001",
    "John Doe",
    "Seminar Teknologi",
    [new ReservationItem("001", 5), new ReservationItem("002", 2)],
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
    [new ReservationItem("003", 10), new ReservationItem("004", 1)],
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
    [new ReservationItem("005", 3), new ReservationItem("006", 1)],
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
    [new ReservationItem("007", 8), new ReservationItem("008", 2)],
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
    [new ReservationItem("009", 15), new ReservationItem("010", 5)],
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
    [new ReservationItem("011", 2), new ReservationItem("012", 10)],
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
    [new ReservationItem("001", 50), new ReservationItem("002", 1)],
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
    [new ReservationItem("006", 30), new ReservationItem("002", 3)],
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
    [new ReservationItem("005", 1), new ReservationItem("002", 5)],
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
    [new ReservationItem("003", 1), new ReservationItem("004", 15)],
    ["9"],
    "2023-10-01",
    "00:00",
    "2023-10-02",
    "23:59",
    "Selesai"
  ),
];

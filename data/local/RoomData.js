import Room from "../../domain/models/Room";

const roomList = [
  new Room(
    1,
    "Aula Utama",
    "Aula dengan panggung dan sound system lengkap",
    100,
    require("../../assets/images-content/aula.jpeg")
  ),
  new Room(
    2,
    "Ruang Meeting",
    "Ruang pertemuan dengan meja bundar",
    20,
    require("../../assets/images-content/ruangmeeting.jpg")
  ),
  new Room(
    3,
    "Studio Seni",
    "Studio untuk kegiatan seni",
    30,
    require("../../assets/images-content/studoseni.jpg")
  ),
  new Room(
    5,
    "Auditorium",
    "Auditorium dengan kursi teater",
    150,
    require("../../assets/images-content/auditorium.jpeg")
  ),
  new Room(
    6,
    "Ruang Rapat",
    "Ruang pertemuan formal",
    15,
    require("../../assets/images-content/ruangrapat.jpeg")
  ),
  new Room(
    7,
    "Community Center",
    "Pusat kegiatan komunitas",
    50,
    require("../../assets/images-content/communityCenter.jpg")
  ),
  new Room(
    8,
    "Community Center",
    "Laboratorium komputer dengan perangkat lengkap",
    25,
    require("../../assets/images-content/labKomputer.jpeg")
  ),
  new Room(
    9,
    "Ruang Seminar",
    "Ruang untuk seminar dan presentasi",
    50,
    require("../../assets/images-content/ruangSeminar.jpeg")
  ),
  new Room(
    10,
    "Teater",
    "Teater dengan panggung dan tempat duduk",
    80,
    require("../../assets/images-content/teater.jpg")
  ),
];

export default roomList;

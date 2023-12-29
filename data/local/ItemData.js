import Item from "../../domain/models/Item";

const itemList = [
  new Item(
    "001",
    "Laptop",
    10,
    "Laptop dengan spesifikasi tinggi",
    require("../../assets/images-content/laptop.png")
  ),
  new Item(
    "002",
    "Proyektor",
    5,
    "Proyektor HD untuk presentasi",
    require("../../assets/images-content/lcdproyektor.jpg")
  ),
  new Item(
    "003",
    "Speaker",
    8,
    "Speaker aktif dengan suara jernih",
    require("../../assets/images-content/speaker.png")
  ),
  new Item(
    "004",
    "Whiteboard",
    3,
    "Whiteboard dengan spidol",
    require("../../assets/images-content/whiteboard.jpg")
  ),
  new Item(
    "005",
    "TV",
    2,
    "TV untuk presentasi besar",
    require("../../assets/images-content/tv.jpeg")
  ),
  new Item(
    "006",
    "Microphone",
    6,
    "Microphone dengan kualitas tinggi",
    require("../../assets/images-content/microphone.png")
  ),
  new Item(
    "007",
    "Chairs",
    50,
    "Kursi lipat untuk acara",
    require("../../assets/images-content/kursi.png")
  ),
  new Item(
    "008",
    "Tables",
    20,
    "Meja lipat untuk acara",
    require("../../assets/images-content/meja.jpg")
  ),
  new Item(
    "009",
    "Scoreboard",
    1,
    "Scoreboard untuk pertandingan",
    require("../../assets/images-content/scoreboard.png")
  ),
  new Item(
    "010",
    "Sports Equipment",
    30,
    "Perlengkapan olahraga",
    require("../../assets/images-content/sport.png")
  ),
  new Item(
    "011",
    "Komputer",
    30,
    "Perangkat Komputer",
    require("../../assets/images-content/PC.jpg")
  ),
];

export default itemList;

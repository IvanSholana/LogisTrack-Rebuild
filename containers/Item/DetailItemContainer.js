import React, { useState, useEffect } from "react";
import { Image, View } from "react-native";
import Item from "../../domain/models/Item";

const DetailItemContainer = ({ route, navigation }) => {
  const data = [
    new Item(
      "001",
      "Laptop",
      10,
      "Laptop dengan spesifikasi tinggi",
      "assets/images-content/laptop.png"
    ),
  ];

  const [imageSource, setImageSource] = useState(null);

  useEffect(() => {
    const imagePath = data[0].gambar;
    const path = require(`../../assets/images-content/${imagePath}`);
    setImageSource(path);
  }, []);

  return <View>{imageSource && <Image source={imageSource} />}</View>;
};

export default DetailItemContainer;

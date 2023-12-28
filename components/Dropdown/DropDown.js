import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function DropDownPickerComponent({
  selectValue,
  placeholderText,
  data,
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(data);

  useEffect(() => {
    selectValue(value);
  }, [value]);
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
        }}
      >
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder={placeholderText}
          onChangeValue={(val) => setValue(val)} // Handle value change
        />
      </View>
    </>
  );
}

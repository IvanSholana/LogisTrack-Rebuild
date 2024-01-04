import { useState } from "react";
import ButtonComponent from "../../components/Button/ButtonComponent";
import TextInputComponent from "../../components/TextInput/TextInputComponent";
import { colors } from "../../constants/colors";
import User from "../../domain/models/User";
import { useDispatch, useSelector } from "react-redux";
import { setRegister } from "../../redux/RegisterSlice";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const RegisterContainer = ({ navigation }) => {
  const [nama, setNama] = useState("");
  const [nimNidn, setNimNidn] = useState("");
  const [password, setPassword] = useState("");
  const [emailInstitusi, setEmailInstitusi] = useState("");
  const [pertanyaanRahasia, setPertanyaanRahasia] = useState("");
  const [jawabanRahasia, setJawabanRahasia] = useState("");
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.register.datauser); // GET USERDATA FROM DB USER
  const [isMahasiswa, setMahasiswa] = useState(false);
  const [isDosen, setDosen] = useState(false);

  const handleMahasiswaChange = (value) => {
    setMahasiswa(value);
    setDosen(!value);
  };

  const handleDosenChange = (value) => {
    setDosen(value);
    setMahasiswa(!value);
  };

  const RegisterHandle = () => {
    console.log(userData);
    if (
      !nama ||
      !nimNidn ||
      !password ||
      !emailInstitusi ||
      !pertanyaanRahasia ||
      !jawabanRahasia
    ) {
      console.log("Mohon isi semua kolom");
      return;
    }

    // Cek apakah username sudah digunakan
    if (userData.some((user) => user.nimNidn === nimNidn)) {
      console.log("NIM/NIDN sudah digunakan, pilih yang lain");
      return;
    }

    const NewUser = new User(
      nama,
      nimNidn,
      password,
      emailInstitusi,
      isMahasiswa ? "Mahasiswa" : "Dosen",
      pertanyaanRahasia,
      jawabanRahasia
    );

    dispatch(
      setRegister({ datauser: [...userData, NewUser.toSerializableObject()] }) // POST USERDATA TO DB USER
    );

    navigation.navigate("Login");
  };

  return (
    <>
      <TextInputComponent
        textinputname={"Nama"}
        placeholder={"Masukkan Nama..."}
        setValue={setNama}
      />
      <TextInputComponent
        textinputname={"NIM/NIDN"}
        placeholder={"Masukkan NIM/NIDN..."}
        setValue={setNimNidn}
      />
      <TextInputComponent
        textinputname={"Password"}
        placeholder={"Masukkan Password..."}
        setValue={setPassword}
        security={true}
      />
      <TextInputComponent
        textinputname={"E-Mail Institusi"}
        placeholder={"Masukkan E-Mail Institusi..."}
        setValue={setEmailInstitusi}
      />
      <View style={{ flexDirection: "row", marginStart: 10, marginTop: 5 }}>
        <Checkbox
          label="Mahasiswa"
          isChecked={isMahasiswa}
          onChange={handleMahasiswaChange}
        />
        <Checkbox
          label="Dosen"
          isChecked={isDosen}
          onChange={handleDosenChange}
        />
      </View>
      <TextInputComponent
        textinputname={"Pertanyaan Rahasia"}
        placeholder={"Masukkan Pertanyaan Rahasia...."}
        setValue={setPertanyaanRahasia}
      />
      <TextInputComponent
        textinputname={"Jawaban Rahasia"}
        placeholder={"Masukkan Jawaban Rahasia..."}
        setValue={setJawabanRahasia}
      />
      <View
        style={{
          height: 120,
          justifyContent: "space-between",
          marginTop: 10,
          marginHorizontal: 10,
        }}
      >
        <ButtonComponent
          buttontext={"Daftar"}
          buttonstyle={{ backgroundColor: colors.buttonLogin }}
          onPress={RegisterHandle}
        />
        <ButtonComponent
          buttontext={"Batal"}
          buttonstyle={{ backgroundColor: colors.eventRejected }}
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </>
  );
};

const Checkbox = ({ label, onChange, isChecked }) => {
  const toggleCheckbox = () => {
    onChange(!isChecked);
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox} style={styles.container}>
      <View style={styles.checkbox}>
        {isChecked ? (
          <Icon name="check-square" size={20} color="green" />
        ) : (
          <Icon name="square" size={20} color={colors.buttonLogin} />
        )}
      </View>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginEnd: 20,
  },
  checkbox: {
    marginRight: 10,
  },
});

export default RegisterContainer;

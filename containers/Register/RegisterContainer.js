import { useState } from "react";
import ButtonComponent from "../../components/Button/ButtonComponent";
import TextInputComponent from "../../components/TextInput/TextInputComponent";
import { colors } from "../../constants/colors";
import { useSelector } from "react-redux";
import User from "../../domain/models/User";
import DropDownPickerComponent from "../../components/Dropdown/DropDown";
import WarningText from "../../components/WarningText/WarningTextComponent";

const RegisterContainer = ({ navigation }) => {
  const [nama, setNama] = useState("");
  const [nimNidn, setNimNidn] = useState("");
  const [password, setPassword] = useState("");
  const [emailInstitusi, setEmailInstitusi] = useState("");
  const [pertanyaanRahasia, setPertanyaanRahasia] = useState("");
  const [jawabanRahasia, setJawabanRahasia] = useState("");
  const [status, setStatus] = useState("");

  const data = [
    { label: "Mahasiswa", value: "mahasiswa" },
    { label: "Dosen", value: "dosen" },
    { label: "Staff", value: "staff" },
  ];

  const RegisterHandle = () => {
    const userdata = useSelector((state) => state.datauser);

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
    if (userdata.some((user) => user.username === nimNidn)) {
      console.log("NIM/NIDN sudah digunakan, pilih yang lain");
      return;
    }

    const NewUser = new User(
      nama,
      nimNidn,
      password,
      emailInstitusi,
      pertanyaanRahasia,
      jawabanRahasia
    );
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
      <DropDownPickerComponent
        data={data}
        selectValue={setStatus}
        placeholderText={"Pilih Status Anda..."}
      />
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
      <ButtonComponent
        buttontext={"Daftar"}
        buttonstyle={{ backgroundColor: colors.buttonLogin }}
      />
      <ButtonComponent
        buttontext={"Batal"}
        buttonstyle={{ backgroundColor: colors.eventRejected }}
        onPress={() => navigation.navigate("Login")}
      />
    </>
  );
};

export default RegisterContainer;

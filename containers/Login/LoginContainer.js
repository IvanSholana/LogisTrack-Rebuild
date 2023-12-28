import { useState } from "react";
import ButtonComponent from "../../components/Button/ButtonComponent";
import TextInputComponent from "../../components/TextInput/TextInputComponent";
import { colors } from "../../constants/colors";
import usersdata from "../../data/local/UserData";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/loginSlice";

const LoginContainer = ({ navigation }) => {
  const [nimNidn, setnimNidn] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginHandling = () => {
    const userdata = usersdata.find(
      (e) => e.nimNidn === nimNidn && e.password === password
    );

    if (userdata) {
      const { name, nimNidn, status } = userdata;
      dispatch(setLogin({ name, nimNidn, status }));
      //   navigation.navigate("item");
    } else {
      console.log("Gagal Login");
    }
  };

  return (
    <>
      <TextInputComponent
        textinputname={"Login"}
        placeholder={"Masukkan NIM/NIDN..."}
        setValue={setnimNidn}
      />
      <TextInputComponent
        textinputname={"Register"}
        placeholder={"Masukkan Password..."}
        security={true}
        setValue={setPassword}
      />

      <ButtonComponent
        buttontext={"Login"}
        buttonstyle={{ backgroundColor: colors.buttonLogin }}
        onPress={loginHandling}
      />
      <ButtonComponent
        buttontext={"Register"}
        buttonstyle={{ backgroundColor: colors.buttonRegister }}
        onPress={() => navigation.navigate("Register")}
      />
    </>
  );
};

export default LoginContainer;

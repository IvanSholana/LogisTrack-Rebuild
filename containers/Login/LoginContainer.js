import { useEffect, useState } from "react";
import ButtonComponent from "../../components/Button/ButtonComponent";
import TextInputComponent from "../../components/TextInput/TextInputComponent";
import { colors } from "../../constants/colors";
import usersdata from "../../data/local/UserData";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/LoginSlice";
import WarningText from "../../components/WarningText/WarningTextComponent";
import TextButtonComponent from "../../components/Button/TextButtonComponent";

const LoginContainer = ({ navigation }) => {
  const [nimNidn, setnimNidn] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState(false);
  const dispatch = useDispatch();

  const loginHandling = () => {
    const userdata = usersdata.find(
      (e) => e.nimNidn === nimNidn && e.password === password
    );

    if (userdata) {
      const { name, nimNidn, status } = userdata;
      dispatch(setLogin({ name, nimNidn, status }));
      navigation.navigate("MainMenu");
    } else {
      setWarning(true);
      console.log("Gagal Login");
    }
  };

  useEffect(() => {
    setWarning(false);
  }, [nimNidn, password]);

  return (
    <>
      <TextInputComponent
        textinputname={"NIM/NIDN"}
        placeholder={"Masukkan NIM/NIDN..."}
        setValue={setnimNidn}
      />
      {warning ? (
        <WarningText content={"NIM/NIDN atau Password Salah..."} />
      ) : null}
      <TextInputComponent
        textinputname={"Password"}
        placeholder={"Masukkan Password..."}
        security={true}
        setValue={setPassword}
      />
      {warning ? (
        <WarningText content={"NIM/NIDN atau Password Salah..."} />
      ) : (
        <TextButtonComponent
          text={"Lupa Password?"}
          additionStyle={{ marginBottom: 5 }}
        />
      )}
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

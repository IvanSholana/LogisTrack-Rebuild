import { useEffect, useState } from "react";
import ButtonComponent from "../../components/Button/ButtonComponent";
import TextInputComponent from "../../components/TextInput/TextInputComponent";
import { colors } from "../../constants/colors";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../redux/LoginSlice";
import WarningText from "../../components/WarningText/WarningTextComponent";
import TextButtonComponent from "../../components/Button/TextButtonComponent";
import { View } from "@gluestack-ui/themed";

const LoginContainer = ({ navigation }) => {
  const [nimNidn, setnimNidn] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState(false);
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.register.datauser); // GET DATA USER FROM DB JANGAN DIUBAH

  const loginHandling = () => {
    const userdata = userData.find(
      (e) => e.nimNidn === nimNidn && e.password === password
    );

    if (userdata) {
      const { name, nimNidn, status } = userdata;
      dispatch(setLogin({ name: name, nimNidn: nimNidn, status: status }));
      setnimNidn("");
      setPassword("");
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
        fillValue={nimNidn}
      />
      {warning ? (
        <WarningText content={"NIM/NIDN atau Password Salah..."} />
      ) : null}
      <TextInputComponent
        textinputname={"Password"}
        placeholder={"Masukkan Password..."}
        security={true}
        setValue={setPassword}
        fillValue={password}
      />
      {warning ? (
        <WarningText content={"NIM/NIDN atau Password Salah..."} />
      ) : (
        <TextButtonComponent
          text={"Lupa Password?"}
          additionStyle={{ marginBottom: 5 }}
        />
      )}
      <View
        style={{
          height: 120,
          justifyContent: "space-between",
          marginTop: 10,
          marginHorizontal: 10,
        }}
      >
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
      </View>
    </>
  );
};

export default LoginContainer;

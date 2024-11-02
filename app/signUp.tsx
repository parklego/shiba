import Button from "@/components/Button.tsx/Button";
import Input from "@/components/input/Input";
import useSignUpStore from "@/store/user/signUp";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
  const router = useRouter();
  const { userName, setName, userEmailConfirm, setEmailConfirm } =
    useSignUpStore();
  const [sendCode, setSendCode] = useState<boolean>(false);
  const [countdown, setCountdown] = useState(300);
  const [isCountdownActive, setIsCountdownActive] = useState(false);

  useEffect(() => {
    let timer: any;
    if (isCountdownActive && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsCountdownActive(false);
    }
    return () => clearInterval(timer);
  }, [isCountdownActive, countdown]);

  const handleSendCode = () => {
    setSendCode(true);
    setIsCountdownActive(true);
    setCountdown(300);
  };

  const handleSignup = () => {
    console.log(useSignUpStore.getState());
    Alert.alert("회원가입 성공", "로그인 페이지로 이동합니다.", [
      {
        text: "확인",
        onPress: () => router.replace("/"),
      },
    ]);
  };

  return (
    <SafeAreaView>
      <View style={styles.contentContainer}>
        <Input placeholder="이름" value={userName} onChangeText={setName} />
        <Input
          placeholder="이메일"
          maxLength={28}
          innerComponent={
            <TouchableOpacity
              style={styles.innerButton}
              onPress={handleSendCode}
            >
              <Text>인증하기</Text>
            </TouchableOpacity>
          }
        />
        {sendCode && (
          <Input
            placeholder="인증번호"
            value={userEmailConfirm}
            onChangeText={setEmailConfirm}
            innerComponent={
              <View style={styles.authWrapper}>
                {isCountdownActive && (
                  <Text style={styles.countdownText}>
                    {Math.floor(countdown / 60)}:
                    {(countdown % 60).toString().padStart(2, "0")}
                  </Text>
                )}
                <TouchableOpacity
                  style={styles.innerButton}
                  onPress={handleSignup}
                >
                  <Text>확인</Text>
                </TouchableOpacity>
              </View>
            }
          />
        )}

        <Input placeholder="비밀번호" password />
        <Input placeholder="비밀번호 확인" password />
        <View className="mt-8">
          <Button title="회원가입" onPress={handleSignup} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    padding: 20,
    height: "100%",
    gap: 5,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderRadius: 20,
  },
  authWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  innerButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
  },
  countdownText: {
    color: "red",
    marginLeft: 10,
  },
});

import Input from "@/components/input/Input";
import SocialButton from "@/components/socialButton/SocialButton";
import Title from "@/components/title/Title";
import { useRouter } from "expo-router";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
  const router = useRouter();

  const handleMoveToLoginPage = () => {
    Alert.alert(
      "뒤로가기",
      "입력된 정보는 저장되지 않습니다. \n 그래도 돌아가시겠습니까?",
      [
        {
          text: "취소",
        },
        {
          text: "확인",
          onPress: () => router.replace("/"),
        },
      ]
    );
  };
  const handleSignup = () => {
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
        <Title text="회원가입" />
        <Input placeholder="아이디" />
        <Input placeholder="닉네임" />
        <Input placeholder="비밀번호" password />
        <Input placeholder="비밀번호 확인" password />
        <Input placeholder="이메일" />
        <View className="mt-8">
          <SocialButton type="common" title="회원가입" onPress={handleSignup} />
        </View>
        <Pressable style={styles.button} onPress={handleMoveToLoginPage}>
          <Text className="text-blue-500">뒤로가기</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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
});

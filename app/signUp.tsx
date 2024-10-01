import Input from "@/components/input/Input";
import SocialButton from "@/components/socialButton/SocialButton";
import Title from "@/components/title/Title";
import { router, Stack, useRouter } from "expo-router";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
  const router = useRouter();

  const handleMoveToLoginPage = () => {
    router.replace("/");
  };
  const handleSignup = () => {
    Alert.alert("회원가입 완료");
    handleMoveToLoginPage();
  };

  return (
    <SafeAreaView>
      <View style={styles.contentContainer}>
        <Title text="회원가입" />
        <Input placeholder="아이디" />
        <Input placeholder="닉네임" />
        <Input placeholder="비밀번호" password />
        <Input placeholder="비밀번호 확인" password />
        <Input placeholder="이메일" password />
        <Input placeholder="전화번호" password />
        <View className="mt-8">
          <SocialButton type="common" title="회원가입" onPress={handleSignup} />
        </View>
        <Pressable style={styles.button} onPress={handleMoveToLoginPage}>
          <Text className="text-blue-500">되돌아가기</Text>
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

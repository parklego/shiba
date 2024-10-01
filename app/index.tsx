import Divide from "@/components/divide/Divide";
import Input from "@/components/input/Input";
import SocialButton from "@/components/socialButton/SocialButton";
import Title from "@/components/title/Title";
import { useRouter } from "expo-router";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  const handlePress = () => {
    router.replace("/signUp");
  };

  const handleLogin = () => {
    Alert.alert("로그인", "준비중입니다.", [
      {
        text: "확인",
        // onPress: () => console.log("확인"),
      },
    ]);
  };
  return (
    <>
      <SafeAreaView>
        <View style={styles.contentContainer}>
          <Title text="온타임" />
          {/* 일반 로그인 */}
          <View style={styles.loginContainer}>
            <Input placeholder="아이디" />
            <Input placeholder="비밀번호" password />
          </View>
          <View className="mt-8">
            <SocialButton type="common" title="로그인" onPress={handleLogin} />
          </View>
          <Divide text="OR" />
          {/* 소셜 로그인 */}
          <View style={styles.loginContainer}>
            <SocialButton
              type="google"
              title="구글로 시작하기"
              onPress={handleLogin}
            />
            <SocialButton
              type="kakao"
              title="카카오로 시작하기"
              onPress={handleLogin}
            />
          </View>
          <View className="mt-4">
            <View className="flex flex-row items-center justify-center">
              <Text className="mr-2 text-gray-400">
                아직 회원이 아니신가요?
              </Text>
              <Pressable onPress={handlePress}>
                <Text className="text-blue-500">회원가입</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
    height: "100%",
  },
  loginContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});

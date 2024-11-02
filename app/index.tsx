import Button from "@/components/Button.tsx/Button";
import Divide from "@/components/divide/Divide";
import Input from "@/components/input/Input";
import SocialButton from "@/components/socialButton/SocialButton";
import { useRouter } from "expo-router";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  const handleFindEmail = () => {
    router.replace("/findEmail");
  };

  const handleFindPassword = () => {
    router.replace("/findPassword");
  };

  const handleSignup = () => {
    router.replace("/signUp");
  };

  const handleLogin = () => {
    Alert.alert("로그인", "준비중입니다. 임시로 넘깁니다.", [
      {
        text: "확인",
        onPress: () => router.replace("/(tabs)"),
      },
    ]);
  };

  const handleSocialLogin = () => {
    Alert.alert(
      "소셜 로그인",
      "준비중입니다. \n 일반 회원가입 페이지로 이동합니다.",
      [
        {
          text: "확인",
          onPress: () => handleSignup(),
        },
      ]
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.navigateTitle}>가장 편한 방법으로 </Text>
          <Text style={styles.navigateTitle}>시작해 보세요!</Text>
          <Text style={styles.guideText}>1분 이면 회원가입 가능해요</Text>
        </View>
        <View>
          <View style={styles.loginContainer}>
            <Input placeholder="이메일" />
            <Input placeholder="비밀번호" password />
            <Button title="로그인" onPress={handleLogin} />
          </View>
          <View className="mt-6 mb-8">
            <View className="flex flex-row items-center justify-evenly">
              <Pressable onPress={handleFindEmail}>
                <Text className="text-gray-400">이메일 찾기</Text>
              </Pressable>
              <Text className="text-gray-400">|</Text>
              <Pressable onPress={handleFindPassword}>
                <Text className="text-gray-400">비밀번호 찾기</Text>
              </Pressable>
              <Text className="text-gray-400">|</Text>
              <Pressable onPress={handleSignup}>
                <Text className="text-gray-400">회원가입</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <Divide text="간편 로그인" />
        {/* 소셜 로그인 */}
        <View style={styles.loginContainer}>
          <SocialButton
            type="kakao"
            title="카카오로 시작하기"
            onPress={handleSocialLogin}
          />
          <SocialButton
            type="naver"
            title="네이버로 시작하기"
            onPress={handleSocialLogin}
          />
          <SocialButton
            type="google"
            title="Google로 시작하기"
            onPress={handleSocialLogin}
          />
        </View>
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
  },
  loginContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderRadius: 20,
  },

  navigateTitle: {
    fontSize: 36,
    fontWeight: "bold",
  },
  guideText: {
    marginTop: 15,
    marginBottom: 40,
    fontSize: 16,
    color: "darkgray",
  },
});

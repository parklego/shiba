import Button from "@/components/Button.tsx/Button";
import Divide from "@/components/divide/Divide";
import Input from "@/components/input/Input";
import SocialButton from "@/components/socialButton/SocialButton";
import Title from "@/components/title/Title";
import { useRouter } from "expo-router";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  const handleSignup = () => {
    router.replace("/signUp");
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
        <View className="mt-12">
          <Button title="이메일로 시작하기" onPress={handleSignup} />
        </View>

        <Divide text="또는" />
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

  navigateTitle: {
    fontSize: 36,
    fontWeight: "bold",
  },
  guideText: {
    marginVertical: 30,
    fontSize: 16,
    color: "darkgray",
  },
});

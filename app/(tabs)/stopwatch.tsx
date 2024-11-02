import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  Alert,
  View,
  Text,
} from "react-native";
import { useRef, useState } from "react";
import StopwatchTimer, {
  StopwatchTimerMethods,
} from "react-native-animated-stopwatch-timer";
import Category from "@/components/category/Category";

export default function StopWatchScreen() {
  const stopwatchTimerRef = useRef<StopwatchTimerMethods>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    stopwatchTimerRef.current?.play();
    setIsPlaying(true);
  };

  const pause = () => {
    stopwatchTimerRef.current?.pause();
    setIsPlaying(false);
  };

  const reset = () => {
    stopwatchTimerRef.current?.reset();
    setIsPlaying(false);
  };
  const save = () => {
    const time = stopwatchTimerRef.current?.getSnapshot();

    if (time && time > 0) {
      Alert.alert("저장하기", "현재 카테고리에 저장하시겠습니까?", [
        {
          text: "취소",
        },
        { text: "확인", onPress: () => handleSaveTime(time) },
      ]);
    }
  };

  const handleSaveTime = (time: number) => {
    console.log(`handleSaveTime : ${time}`);
    Alert.alert("저장되었습니다.");
  };

  return (
    <SafeAreaView>
      <View className="flex items-center justify-around w-full h-full p-5">
        <Category />
        <StopwatchTimer
          ref={stopwatchTimerRef}
          trailingZeros={0}
          leadingZeros={2}
          decimalSeparator=":"
          textCharStyle={styles.timerText}
        />
        <View className="w-full gap-4">
          {isPlaying ? (
            <Pressable
              onPress={pause}
              className="flex items-center justify-center w-full h-16 bg-red-500 rounded-full"
            >
              <Text className="text-xl">일시중지</Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={play}
              className="flex items-center justify-center w-full h-16 bg-green-500 rounded-full"
            >
              <Text className="text-xl">시작하기</Text>
            </Pressable>
          )}
          <Pressable
            onPress={reset}
            className="flex items-center justify-center w-full h-16 rounded-full bg-slate-500"
          >
            <Text className="text-xl">리셋하기</Text>
          </Pressable>
          <Pressable
            onPress={save}
            className="flex items-center justify-center w-full h-16 bg-blue-500 rounded-full"
          >
            <Text className="text-xl">저장하기</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  timerText: {
    fontSize: 100,
    fontWeight: "bold",
  },
});

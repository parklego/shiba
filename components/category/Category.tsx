import React from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

const Category = () => {
  return (
    <SafeAreaView>
      <View className="flex flex-row items-center justify-between w-full">
        {/* Todo : 수정 버튼의 너비 만큼 패딩주기 */}
        <Text className="flex-1 pl-6 text-lg text-center">category</Text>
        <Pressable onPress={() => console.log("Edit category")}>
          <Text className="w-6 text-blue-500">수정</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Category;

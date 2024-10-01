import React from "react";
import { SafeAreaView, Text } from "react-native";

interface MonthReportProps {
  selected: string;
}

const MonthReport = ({ selected }: MonthReportProps) => {
  return (
    <SafeAreaView>
      <Text>나의 한달 :{selected}</Text>
    </SafeAreaView>
  );
};

export default MonthReport;

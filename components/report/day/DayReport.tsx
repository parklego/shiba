import React from "react";
import { SafeAreaView, Text } from "react-native";

interface DayReportProps {
  selected: string;
}

const DayReport = ({ selected }: DayReportProps) => {
  return (
    <SafeAreaView>
      <Text>나의 하루 : {selected}</Text>
    </SafeAreaView>
  );
};

export default DayReport;

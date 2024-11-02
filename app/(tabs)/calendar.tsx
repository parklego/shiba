import React, { useState } from "react";

import { Calendar, LocaleConfig } from "react-native-calendars";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import DayReport from "@/components/report/day/DayReport";
import MonthReport from "@/components/report/month/MonthReport";

export default function CalendarScreen() {
  const [selected, setSelected] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const handleCurrentMonth = (date: datePickData) => {
    setSelected("");
    setSelectedMonth(date.dateString);
  };
  const handleDatePicker = (date: datePickData) => {
    console.log(date);
    if (selected === date.dateString) {
      setSelected("");
    } else {
      setSelected(date.dateString);
    }
  };

  return (
    <SafeAreaView>
      <Calendar
        style={styles.calendar}
        current={new Date().toISOString().slice(0, 10)}
        onMonthChange={(date: datePickData) => {
          handleCurrentMonth(date);
        }}
        onDayPress={(date: datePickData) => {
          handleDatePicker(date);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: false,
          },
        }}
      />
      <View style={styles.info}>
        {selected ? (
          <DayReport selected={selected} />
        ) : (
          <MonthReport selected={selectedMonth} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  calendar: {
    // minWidth: 280,
    // maxWidth: 600,
    // width: screenWidth,
    // height: 280,
    // marginBottom: 20,
  },
  info: {
    width: "100%",
    height: 200,
    borderRadius: 4,
  },
});

LocaleConfig.locales["fr"] = {
  monthNames: [
    "01월",
    "02월",
    "03월",
    "04월",
    "05월",
    "06월",
    "07월",
    "08월",
    "09월",
    "10월",
    "11월",
    "12월",
  ],
  monthNamesShort: [
    "01월",
    "02월",
    "03월",
    "04월",
    "05월",
    "06월",
    "07월",
    "08월",
    "09월",
    "10월",
    "11월",
    "12월",
  ],
  dayNames: [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
};

LocaleConfig.defaultLocale = "fr";

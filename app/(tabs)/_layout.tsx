import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // tabBarStyle: {
        //   position: "absolute",
        //   bottom: 25,
        //   left: 15,
        //   right: 15,
        //   elevation: 0,
        //   borderRadius: 15,
        //   paddingBottom: 5,
        //   paddingTop: 5,
        // },
        // tabBarItemStyle: {
        //   padding: 5,
        // },

        // tabBarLabelStyle: {
        //   fontSize: 12,
        // },
        tabBarLabelPosition: "below-icon",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "마이홈",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "cloud" : "cloud-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="stopwatch"
        options={{
          title: "스탑워치",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "time" : "time-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "캘린더",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "calendar" : "calendar-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="analysis"
        options={{
          title: "분석",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "bar-chart" : "bar-chart-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="myPage"
        options={{
          title: "마이페이지",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person" : "person-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

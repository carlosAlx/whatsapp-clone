import { View, ScrollView } from "react-native";
import { Button, Title, Paragraph } from "react-native-paper";
import {
  Tabs,
  TabScreen,
  TabsProvider,
  useTabIndex,
  useTabNavigation,
} from "react-native-paper-tabs";
import { Appbar } from "react-native-paper";
import CardItem from "./CardItem";

const cardItems = [
  { name: "Dev Stack", lastText: "Hey there tell", time: "5:27 PM" },
  { name: "Balram", lastText: "Not doing anything", time: "Yesterday" },
  { name: "Test", lastText: "Hey there", time: "Yesterday" },

  { name: "Test 2", lastText: "Not doing anything", time: "Yesterday" },

  { name: "Test 3", lastText: "Here we go", time: "Yesterday" },
  { name: "Test 4", lastText: "Lets go somewhere", time: "Yesterday" },
  { name: "Test5", lastText: "Hey there", time: "Yesterday" },

  { name: "Test 6", lastText: "Not doing anything", time: "Yesterday" },
  { name: "Test 7", lastText: "Here we go", time: "Yesterday" },
];

function Example() {
  return (
    <View>
      <Appbar.Header
        style={{
          backgroundColor: "#008069",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Appbar.BackAction
          onPress={() => {}}
          style={{
            width: 0,
          }}
        />
        <Appbar.Content
          title="WhatsApp"
          style={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100%",
          }}
          titleStyle={{
            color: "#fff",
            fontSize: 20,
            fontFamily: "Roboto",
            fontWeight: "700",
          }}
        />
        <Appbar.Action icon="magnify" iconColor="#fff" onPress={() => {}} />
        <Appbar.Action
          icon="dots-vertical"
          onPress={() => {}}
          iconColor="#fff"
        />
      </Appbar.Header>
      <TabsProvider defaultIndex={0}>
        <Tabs
          uppercase={false}
          style={{ backgroundColor: "#008069" }}
          tabLabelStyle={{
            color: "#fff",
            fontSize: 14,
            fontFamily: "Roboto",
            fontWeight: "700",
            borderBottomColor: "#fff",
          }}
        >
          <TabScreen icon="camera" label="">
            <ExploreWitHookExamples />
          </TabScreen>
          <TabScreen label="CHATS" badge={33}>
            <ExploreWitHookExamples />
          </TabScreen>
          <TabScreen label="STATUS">
            <View style={{ backgroundColor: "black", flex: 1 }} />
          </TabScreen>
          <TabScreen label="CALLS">
            <View style={{ backgroundColor: "red", flex: 1 }} />
          </TabScreen>
        </Tabs>
      </TabsProvider>
      <ScrollView>
        {cardItems.map((item) => (
          <CardItem {...item} />
        ))}
      </ScrollView>
    </View>
  );
}

function ExploreWitHookExamples() {
  const goTo = useTabNavigation();
  const index = useTabIndex();
  return (
    <View style={{ flex: 1 }}>
      <Title>Explore</Title>
      <Paragraph>Index: {index}</Paragraph>
      <Button onPress={() => goTo(1)}>Go to Flights</Button>
    </View>
  );
}

export default Example;

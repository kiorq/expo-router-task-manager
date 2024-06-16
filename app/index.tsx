import { Button, SafeAreaView } from "react-native";
import styled from "styled-components/native";

import { useEffect, useState } from "react";
import { getCounter } from "@/lib/counter";

export default function HomeScreen() {
  const [timesRan, setTimesRan] = useState<number>(0);

  const checkTimesRan = () => {
    getCounter().then(setTimesRan);
  };

  useEffect(() => {
    checkTimesRan();
  }, []);
  return (
    <SafeAreaView>
      <Section>
        <HeadingText>Keep App in background</HeadingText>
        <Text>Background fetch ran {timesRan} times.</Text>
        <Button title="Check Ran" onPress={checkTimesRan} />
        <Text>Tap button to refresh count</Text>
      </Section>
    </SafeAreaView>
  );
}

const Section = styled.View`
  width: 100%;

  padding: 8px;
`;

const HeadingText = styled.Text`
  font-size: 20px;
  font-weight: 500;
`;
const Text = styled.Text``;

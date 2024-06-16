import AsyncStorage from "@react-native-async-storage/async-storage";

export const getCounter = async () => {
  return parseInt((await AsyncStorage.getItem("counter")) || "0");
};

export const incrementCounter = async () => {
  const updatedValue = (await getCounter()) + 1;

  await AsyncStorage.setItem("counter", updatedValue.toString());
};

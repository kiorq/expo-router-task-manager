import { Stack } from "expo-router";
import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";
import { incrementCounter } from "@/lib/counter";
import { useEffect } from "react";

const BACKGROUND_FETCH_TASK = "background-fetch";

TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
  const now = Date.now();

  console.log(
    `Got background fetch call at date: ${new Date(now).toISOString()}`
  );

  // NOTE: increment counter by 1 each time background fetch is called
  await incrementCounter();

  return BackgroundFetch.BackgroundFetchResult.NewData;
});

// registering task in global state too?
BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
  minimumInterval: 60 * 15, // 15 minutes
});

export default function RootLayout() {
  useEffect(() => {
    // or register task on mount?
    // BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
    //   minimumInterval: 60 * 15, // 15 minutes
    // });
  }, []);
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}

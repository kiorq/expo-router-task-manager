/**
 * this files is a copy of
 * expo-router/entry, but gives the developer a way to expose code when the app is loaded?
 * (e.g: TaskManager)
 */
import "expo-router/entry";
import { incrementCounter } from "./lib/counter";
import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";

console.log("Custom entry override");

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

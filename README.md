# About

This setup includes TaskManager, in this case, Background Fetch, with expo-router.

# Details

- Function defined in global scope, as mentioned in docs for `TaskManager.defineTask` (see https://docs.expo.dev/versions/latest/sdk/task-manager/#taskmanagerdefinetaskttaskname-taskexecutor)
- Background Fetch is registered globally too (May not be correct)
- Task just loga and increments a counter in AsyncStorage
- UI shows value of counter, showing the times the Background fetch task was executed.
- UI include a refresh button, that just retrieves the counter value
- See package.json file to show the way I starts app.

# Observations

- Testing in Simulator (not Expo Go, `npm run ios`), using Time Profile as mentioned in docs because of iOS limitation, correct executes task and increments the counter.
- Testing on Real device (using eas build, `npm run ios:device`), waited up to an hour, counter does not seem to be updated.

# Theory

1. `_layout.ts` doesn't get loaded when Background Fetch is triggered. The docs for `TaskManager.defineTask()` mention that "no views are mounted in this scenario." when the js app is spinned up in the backround. I suspect this includes anything in the `app/`.

2. Because of the way expo-router is setup, the developer does not seem to have a way to add code to the entry of the app (e.g: defining tasks).

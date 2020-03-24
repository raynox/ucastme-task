import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import WeatherFeed from './src/weather/screens/WeatherFeed';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import createStore from './src/base/redux/configureStore';
import rootSaga from './src/base/redux/sagas';
import { Provider } from 'react-redux';
import { bool } from 'prop-types';

const store = createStore();
store.runSaga(rootSaga);

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      'nunito-black': require('./assets/fonts/Nunito/Nunito-Black.ttf'),
      'roboto': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
      'roboto-medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
      'roboto-bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // eslint-disable-next-line no-console
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default function App(props) {

  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const { skipLoadingScreen } = props;

  if (!isLoadingComplete && !skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <WeatherFeed />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
}

App.propTypes = {
  skipLoadingScreen: bool,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

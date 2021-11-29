import React, {useEffect} from 'react';
import RootNavigator from './navigation/NavigtaionScreen';
import PushNotification from 'react-native-push-notification';

// const createChannel = () => {
//   PushNotification.createChannel({
//     channelId: 'text-channel',
//     channelName: 'Test Name',
//   });
// };

const App = () => {
  // useEffect(() => {
  //   createChannel();
  // }, []);

  return <RootNavigator />;
};

export default App;

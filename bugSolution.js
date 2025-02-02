import React, { useState, useEffect, useRef } from 'react';
import { Camera, CameraType } from 'expo-camera';

const App = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [cameraRef, setCameraRef] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleTakePicture = async () => {
    if (isReady && cameraRef) {
        try {
            const photo = await cameraRef.takePictureAsync();
            console.log('Photo taken:', photo);
        } catch (error) {
            console.error('Error taking picture:', error);
        }
    }
  };

  if (hasPermission === null) {
    return <View />; // loading
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera
        ref={(ref) => {
          setCameraRef(ref);
          setIsReady(true);
        }}
        style={{ flex: 1 }}
        type={type}
      >
        <Button title="Take Picture" onPress={handleTakePicture} />
      </Camera>
    </View>
  );
};

export default App;
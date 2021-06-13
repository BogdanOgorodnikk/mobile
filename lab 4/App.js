import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import Audio from './pages/Audio';
import Video from './pages/Video';
import VideoSelector from './pages/VideoSelector';
import AudioSelector from './pages/AudioSelector';

export default function App() {


  return (
    <View style={styles.container}>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/audio" component={Audio}/>
            <Route path="/video" component={Video}/>
            <Route path="/videoselector" component={VideoSelector}/>
            <Route path="/audioselector" component={AudioSelector}/>
        </Switch>
      </BrowserRouter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

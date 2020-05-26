import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import {WebPortalUrl} from '../services/WebPortalLinks';

export default class WebViewScreen extends Component {
  render() {
    return <WebView source={{uri: WebPortalUrl}} style={{marginTop: 20}} />;
  }
}

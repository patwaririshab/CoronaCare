import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class WebViewScreen extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://vafs.nus.edu.sg/adfs/oauth2/authorize?response_type=code&client_id=97F0D1CACA7D41DE87538F9362924CCB-184318&resource=sg_edu_nus_oauth&redirect_uri=https%3A%2F%2Fmyaces.nus.edu.sg%3A443%2Fhtd%2Fhtd' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}
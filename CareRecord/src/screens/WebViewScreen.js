import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

export default class WebViewScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.url,
    }
  }

  componentDidMount() {
    console.log('URL', this.state.url);
  }

  render() {
    return <WebView source={{uri: `${this.state.url}`}} style={{marginTop: 20}} />;
  }
}

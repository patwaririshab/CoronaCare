import React from 'react'
import { Navigation } from "react-native-navigation"

const NavigationTabInitialiser = () => {
    Navigation.setRoot({
        root: {
            bottomTabs: {
                children: [{
                    stack: {
                        children: [{
                            component: {
                                name: 'navigation.CoronaCare.RecordsScreen',
                                passProps: {
                                    text: 'This is tab 1'
                                }
                            }
                        }],
                        options: {
                            bottomTab: {
                                text: 'Tab 1',
                                icon: require('../assets/images/thermometer.png'),
                                testID: 'FIRST_TAB_BAR_BUTTON'
                            }
                        }
                    }
                },
                {
                    component: {
                        name: 'navigation.CoronaCare.HomeScreen',
                        passProps: {
                            text: 'This is tab 2'
                        },
                        options: {
                            bottomTab: {
                                text: 'Tab 2',
                                icon: require('../assets/images/thermometer.png'),
                                testID: 'SECOND_TAB_BAR_BUTTON'
                            }
                        }
                    }
                },
                {
                    stack: {
                        id: "AFTERLOGIN_STACK",
                        options: {
                            bottomTab: {
                                text: 'Tab 3',
                                icon: require('../assets/images/thermometer.png'),
                                testID: 'THIRD_TAB_BAR_BUTTON'
                            }
                        },
                        children: [
                            {
                                component: {
                                    name: 'navigation.CoronaCare.AfterLogin',
                                    passProps: {
                                        text: 'This is tab 3'
                                    }
                                }
                            },
                            {
                                component: {
                                    id: "CAMERA_SCREEN",
                                    name: "navigation.CoronaCare.CameraScreen"
                                }
                            }
                        ]
                    }
                }]
            }
        }
    });

    Navigation.popToRoot("AFTERLOGIN_STACK")

    return (
        <></>
    )
}

export default NavigationTabInitialiser


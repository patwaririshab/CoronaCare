package com.carerecord;
import org.devio.rn.splashscreen.SplashScreen;
import android.os.Bundle;
import com.reactnativenavigation.NavigationActivity;

public class MainActivity extends NavigationActivity {
        @Override
        protected void onCreate(Bundle savedInstanceState) {
            SplashScreen.show(this, R.style.SplashStatusBarTheme);
            super.onCreate(savedInstanceState);
        }
            
            protected String getMainComponentName() {
                return "splashScreen";
        }
    }

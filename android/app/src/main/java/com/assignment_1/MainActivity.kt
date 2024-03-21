package com.assignment_1
import android.os.Bundle;
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.facebook.react.shell.MainReactPackage
import org.devio.rn.splashscreen.SplashScreen
import org.devio.rn.splashscreen.SplashScreenReactPackage
import java.util.Arrays

class MainActivity : ReactActivity() {


  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "Assignment_1"

        fun getPackages(): List<ReactPackage> {
            return Arrays.asList(
                    MainReactPackage(),
                    SplashScreenReactPackage()  // here
            )
        }

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
      override fun onCreate(savedInstanceState: Bundle?) {
        SplashScreen.show(this);  // add this
        super.onCreate(null)
      }
}

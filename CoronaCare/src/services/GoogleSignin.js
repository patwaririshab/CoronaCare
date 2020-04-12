import { GoogleSignin } from '@react-native-community/google-signin'
import auth from '@react-native-firebase/auth';

export default async function onGoogleButtonPress() {
    await GoogleSignin.configure({
        webClientId: "109484316758-i49r5g01u99t6l738vncov3p00c7bne2.apps.googleusercontent.com",
        // iosClientId: "109484316758-0dp9vjjepnkm1opeaqind03n11531p3q.apps.googleusercontent.com"
    })
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
}


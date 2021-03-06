import { StackNavigator, TabNavigator } from "react-navigation";

import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";

import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Create from "./screens/Create";
import ColorEditor from "./screens/ColorEditor";
import Landing from "./screens/Landing";

import Interaction from "./screens/Interaction";

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        },
        initialRouteName: signedIn ? "Home" : "Landing"
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        },
        initialRouteName: !signedIn ? "Landing" : "Home"
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};

export const SignedOut = StackNavigator({
  Landing: {
    screen: Landing,
    navigationOptions: {
      title: "Welcome To Medicine Reminder"
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up"
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In"
    }
  }
});

export const SignedIn = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home"
    }
  },
  Interaction: {
    screen: Interaction,
    navigationOptions: {
      title: "Interactions"
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: "Medicine"
    }
  },
  Create: {
    screen: Create,
    navigationOptions: {
      title: "Create"
    }
  },
  Colors: {
    screen: ColorEditor,
    navigationOptions: {
      title: "Color Editor"
    }
  }
});

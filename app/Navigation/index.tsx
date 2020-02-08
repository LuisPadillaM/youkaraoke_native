import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeBottomNavigation from './HomeBottomNavigation';
import {SignIn, SignUp, GenderTastes} from '../screens';

const stackRoutes = {
  Home: {
    screen: HomeBottomNavigation,
  },
  SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen: SignUp,
  },
  GenderTastes: {
    screen: GenderTastes,
  },
};

const GlobalNavigator = createStackNavigator(stackRoutes, {
  headerMode: 'none',
  initialRouteName: 'Home',
});

export default createAppContainer(GlobalNavigator);

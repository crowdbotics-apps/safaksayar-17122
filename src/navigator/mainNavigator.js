import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList47581Navigator from '../features/ArticleList47581/navigator';
import ArticleList47580Navigator from '../features/ArticleList47580/navigator';
import ArticleList47579Navigator from '../features/ArticleList47579/navigator';
import ArticleList47561Navigator from '../features/ArticleList47561/navigator';
import ArticleList47560Navigator from '../features/ArticleList47560/navigator';
import ArticleList47559Navigator from '../features/ArticleList47559/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
ArticleList47581: { screen: ArticleList47581Navigator },
ArticleList47580: { screen: ArticleList47580Navigator },
ArticleList47579: { screen: ArticleList47579Navigator },
ArticleList47561: { screen: ArticleList47561Navigator },
ArticleList47560: { screen: ArticleList47560Navigator },
ArticleList47559: { screen: ArticleList47559Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

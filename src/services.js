import MainNavigation from './mainNavigation';

export default {
    MainNavigation: () => MainNavigation,
    WelcomeController: () => import('./controllers/welcome')
};

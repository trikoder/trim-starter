import app from 'trim/app';
import translations from 'trim/lang/english';
import routes from './routes';
import services from './services';

import './scss/main.scss';

app
    .setBootData({
        usesPushState: true,
        googleMapsApiKey: undefined,
        baseUrl: process.env.BASE_URL,
        baseApiUrl: process.env.BASE_API_URL
    })
    .loadTranslations(translations, 'en')
    .registerServices(services)
    .registerRoutes(routes)
    .start();

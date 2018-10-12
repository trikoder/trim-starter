import app from 'cmf/js/app';
import translations from 'cmf/js/lang/english';
import routes from './routes';
import services from './services';

import './scss/main.scss';

app
    .setBootData({
        usesPushState: true,
        googleMapsApiKey: undefined,
        baseUrl: process.env.BASE_URL,
        baseApiUrl: process.env.BASE_API_URL,
        assetsBuildPath: process.env.ASSET_PATH
    })
    .loadTranslations(translations, 'en')
    .registerServices(services)
    .registerRoutes(routes)
    .start();

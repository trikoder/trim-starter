export default {

    getNavigationItems: router => [

        {
            caption: 'Start page',
            key: 'startPage',
            url: router.url('welcome'),
            icon: 'checkCircle'
        }

    ],

    getUserNavigationItems: router => [

        {
            key: 'showSearch',
            name: 'Show search <span style="opacity: 0.4;">(Shift + l)</span>',
            action: mainNavigation => mainNavigation.showSearch().close()
        }

    ],

    getProjectCaption: () => 'Project CMS',

    getUserCaption: () => 'CMS user'

};

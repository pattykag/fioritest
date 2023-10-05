sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/acc/ui/users/test/integration/FirstJourney',
		'com/acc/ui/users/test/integration/pages/UsersList',
		'com/acc/ui/users/test/integration/pages/UsersObjectPage'
    ],
    function(JourneyRunner, opaJourney, UsersList, UsersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/acc/ui/users') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheUsersList: UsersList,
					onTheUsersObjectPage: UsersObjectPage
                }
            },
            opaJourney.run
        );
    }
);
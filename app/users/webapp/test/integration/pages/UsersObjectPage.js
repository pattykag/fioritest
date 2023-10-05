sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.acc.ui.users',
            componentId: 'UsersObjectPage',
            entitySet: 'Users'
        },
        CustomPageDefinitions
    );
});
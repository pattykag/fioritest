using { userlist as my } from '../db/schema';

service api {
    @odata.draft.enabled
    entity Users as projection on my.Users;
}
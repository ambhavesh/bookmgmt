namespace zbookshop.srv.service;

using {zbookshop.db.schema} from '../db/schema';

service zbookshopsrv @(
    requires: 'authenticated-user',
    path    : '/odata'
) {

    function sendJWT()                 returns String;

    @odata.draft.enabled: true
    entity Books @(restrict: [{
        grant: [
            'READ',
            'WRITE'
        ],
        to   : 'Admin'
    }, ])         as select from schema.BOOKS;

    entity Author as select from schema.AUTHOR;

    @open
    type object {};

    function getBook(bookId : Integer) returns object;
}

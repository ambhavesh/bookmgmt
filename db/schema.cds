namespace zbookshop.db.schema;

entity BOOKS {
    key BOOK_ID    : Integer;
        BOOK_NAME  : String;
        BOOK_PRICE : String;
        WRITTEN_BY : Association to AUTHOR;
};

entity AUTHOR {
    key AUTHOR_ID   : Integer;
        AUTHOR_NAME : String;
        NATIONALITY : String;
        HAS_BOOK    : Association to BOOKS
                          on HAS_BOOK.WRITTEN_BY = $self;
}

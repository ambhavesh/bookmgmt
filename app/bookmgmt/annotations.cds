using zbookshop.srv.service.zbookshopsrv as service from '../../srv/service';

annotate service.Books with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'BOOK_ID',
            Value : BOOK_ID,
        },
        {
            $Type : 'UI.DataField',
            Label : 'BOOK_NAME',
            Value : BOOK_NAME,
        },
        {
            $Type : 'UI.DataField',
            Label : 'BOOK_PRICE',
            Value : BOOK_PRICE,
        },
        {
            $Type : 'UI.DataField',
            Label : 'WRITTEN_BY_AUTHOR_ID',
            Value : WRITTEN_BY_AUTHOR_ID,
        },
    ]
);
annotate service.Books with {
    WRITTEN_BY @Common.ValueList : {
        $Type : 'Common.ValueListType',
        CollectionPath : 'Author',
        Parameters : [
            {
                $Type : 'Common.ValueListParameterInOut',
                LocalDataProperty : WRITTEN_BY_AUTHOR_ID,
                ValueListProperty : 'AUTHOR_ID',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'AUTHOR_NAME',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'NATIONALITY',
            },
        ],
    }
};
annotate service.Books with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'BOOK_ID',
                Value : BOOK_ID,
            },
            {
                $Type : 'UI.DataField',
                Label : 'BOOK_NAME',
                Value : BOOK_NAME,
            },
            {
                $Type : 'UI.DataField',
                Label : 'BOOK_PRICE',
                Value : BOOK_PRICE,
            },
            {
                $Type : 'UI.DataField',
                Label : 'WRITTEN_BY_AUTHOR_ID',
                Value : WRITTEN_BY_AUTHOR_ID,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
annotate service.Books with @(
    UI.SelectionFields : [
        BOOK_ID,
        BOOK_NAME,
    ]
);
annotate service.Books with {
    BOOK_ID @Common.Label : 'BOOK_ID'
};
annotate service.Books with {
    BOOK_NAME @Common.Label : 'BOOK_NAME'
};

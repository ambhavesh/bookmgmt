sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'bookmgmt/test/integration/FirstJourney',
		'bookmgmt/test/integration/pages/BooksList',
		'bookmgmt/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('bookmgmt') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);
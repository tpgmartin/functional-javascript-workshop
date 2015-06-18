function countWords(inputWords) {
    return inputWords.reduce( function( outputObj , word ) {

        if ( !outputObj[ word ] ) {
            outputObj[ word ] = 1 ;
        }  else {
            outputObj[ word ] += 1;
        }

        return outputObj ;

    }, {} );
}

module.exports = countWords
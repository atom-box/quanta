// gotta run as node -r esm filename.js to get import to work

/* For a list of given strings pad out two parts.   
1.  Any trailing digits get padded with leading zeroes to make the number six digits.
2.  The leading two digit year gets padded out to a four digit year.
*/

"use strict;"
import tags from "/Users/evan/Dropbox/code/codingBatJS/helpers/padderDB.js"

/*
** When passed a tag, 
** this function returns the same tag
** with either 19 or 20 prefixed onto the year
*/
const fixYear = function(tag) {
	return tag.slice(0,2);
}

/*
** When passed NOARGUMENT, 
** this function returns the first three tags in the db
*/
const showThree = function() {
	return tags.slice(0,3);
}





 //                      _         
 //                     (_)        
 //  _ __ ___     __ _   _   _ __  
 // | '_ ` _ \   / _` | | | | '_ \ 
 // | | | | | | | (_| | | | | | | |
 // |_| |_| |_|  \__,_| |_| |_| |_|
                                                               
// Detect option. Run Tests.
let option = process.argv[2];
if (option !== undefined){
	switch (option){
		case 'nada':
			console.log(`Running the :::${option}::: test.`);
			break;
		case 'dbsize':
			console.log(`Present ${tags.length}`)
			break;
		case 'seeyear':
			console.log(`Tag starts with these two :::${fixYear(tags[0])}:::`)
			break;
		case 'showthreetags':
			console.log(`We see_______${showThree()}`);
			break;
		default: 
			console.log(`:::${option}::: not recognized.`)
	}
} else {
	console.log(`To run tests, enter an option besides ${option}`)
} 
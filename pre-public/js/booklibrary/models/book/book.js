/*
 * Book
 */
/////////////////////////// ON DOCUMENT READY /////////////////////////////
$(document).ready(function() {
    console.log('CORE: booklibrary model Book: document ready');
    require(['../booklibrary/models/Book/Base'], function (Base) {
        console.log('CORE: Book called');
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x7|0x8)).toString(16);
        });    
        var configs = {
            // to do
        };
        var Book = new Base(uuid, configs);

        global.Book = Book; // FOR TESTING IN BROWSER CONSOLE ONLY!!!

        return Book;         
    });
});
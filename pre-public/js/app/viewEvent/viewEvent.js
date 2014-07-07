/*
 * ViewEvent
 * An event is where something happening is captured.
 */
var ViewEvent123 = 1 << 0;
var ViewEvent456 = 1 << 1;
var ViewEventSubscribe = 1 << 2;

define(['./Base'], function (Base) {
    console.log('CORE: viewEvent called');     
    var _ViewEvent = new Base('');

    // following this example, slightly
    // http://sandbox.thewikies.com/javascript-mvc-hello-world/index.2.html

    _ViewEvent.raiseEvent = function ( flag ) {
        // Check if ViewEvent123 was passed.
        if (flag & ViewEvent123) {
            console.log('CORE: viewEvent123 raised');             
            // Run the ViewController's show function.
            _ViewController.loadView(123);
        }
        // Check if ViewEvent456 was passed.
        if (flag & ViewEvent456) {
            console.log('CORE: viewEvent456 raised');             
            // Run the ViewController's show function.
            _ViewController.loadView(456);
        }
        // Check if ViewEventSubscribe was passed.        
        if (flag & ViewEventSubscribe) {
            console.log('CORE: viewEventSubscribe raised');          
            // Subscribe ViewService
            _ViewController.subscribeViewService('subscribe');
        }
    };
    return _ViewEvent;
});

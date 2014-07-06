/*
 * Main
 */
define(function (require) {
    console.log('main called');
    var $ = require('jquery'),
        lib = require('./lib'),
	    config = require('./config/config'),
        controller = require('./controller/controller'),
        model = require('./model/model'),
	    modelController = require('./modelController/modelController'),
        modelEvent = require('./modelEvent/modelEvent'),
	    modelService = require('./modelService/modelService'),
	    serviceBus = require('./serviceBus/serviceBus'),
	    view = require('./view/view'),
	    viewController = require('./viewController/viewController'),
        viewEvent = require('./viewEvent/viewEvent'),
	    viewService = require('./viewService/viewService'),
        backbone = require('backbone'),
        underscore = require('underscore'),
        lodash = require('lodash'),
        jquery = require('jquery'),
        bootstrap = require('bootstrap'); // bootstrap extends jquery
        expect = require('expect'),
        mocha = require('mocha'),
        conduitjs = require('conduit'); // depends on bootstrap, expect, and mocha
//        postal = require('postal')(lodash), // depends on lodash
//        postaldiags = require('postaldiags')(postal); // depends on postal and lodash

    //    postal: "../../../lib/postal",
    //    postaldiags: "../../../bower/postal.diagnostics/lib/postal.diagnostics",
     
    //    postal = require('postal');

    // Set config
    console.log('config:');
    console.log(config);
    controller.setConfig(config);
    // Backbone check
    console.log('backbone:');
    console.log(backbone);
    // Lodash check
    console.log('lodash:');
    console.log(lodash);
    // JQuery check
    console.log('jquery:');
    console.log(jquery); 
    jquery.VERSION = jquery.fn.jquery;
    // Bootstrap check
    console.log('bootstrap:');
    console.log(bootstrap);
    // Expect check
    console.log('expect:');
    console.log(expect);
    // Mocha check
    console.log('mocha:');
    console.log(mocha);
    // ConduitJS check
    console.log('conduitjs:');
    console.log(conduitjs);

    // Postal check
//    console.log('postal');
//    console.log(postal);
    // PostalDiags check
//    console.log('postaldiags:');
//    console.log(postaldiags);

//    serviceBus.serviceBus = postal; // Set postal as the serviceBus property of serviceBus
//    controller.setServiceBus(serviceBus);
    // Set model
    console.log('model:');
    console.log(model);
    controller.setModel(model);

    //A fabricated API to show interaction of
    //common and specific pieces.

    // DOM ready
    $(function () {
        controller.render(lib.getBody());
        //Display backbone and underscore versions
        $('body')
            .append('<div>backbone version: ' + backbone.VERSION + '</div>')
            .append('<div>underscore version: ' + underscore.VERSION + '</div>')
            .append('<div>lodash version: ' + lodash.VERSION + '</div>')
            .append('<div>jquery version: ' + jquery.VERSION + '</div>')
            .append('<div>expect version: ' + expect.VERSION + '</div>')
            .append('<div>mocha version: ' + mocha.VERSION + '</div>')
            .append('<div>conduitjs version: ' + conduitjs.VERSION + '</div>')
        //    .append('<div>postal version: ' + postal.VERSION + '</div>')              
        //    .append('<div>postaldiags version: ' + postaldiags.VERSION + '</div>')                                       
			.append('<div>Example 1 - The World\'s Simplest Subscription<div class="results" id="example1"></div></div>');
    });

/*
    // DOM ready
    $(function() {
        require(["calculator"], function(calculator) {
            console.log('calculator is required');
        }); // TODO: Make this dynamic
    });
*/

});

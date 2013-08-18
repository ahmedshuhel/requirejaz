(function () {
	requirejs.config({
		urlArgs: "bust=" + (new Date()).getTime(),
		baseUrl: './',
		paths: {
			jquery  :  'lib/jquery-1.10.2/jquery-1.10.2',
			jasmine :  'lib/jasmine-1.3.1/jasmine',
			'jasmine-html' : 'lib/jasmine-1.3.1/jasmine-html',
		},

		shim: {    
			jasmine : {
				    exports: 'jasmine'
			},		
			   
			'jasmine-html': {
				    deps: ['jasmine'],
				    exports: 'jasmine'
			}
		}		  
	});

	require(['jquery', 'jasmine-html'], function($, jasmine){

		var jasmineEnv = jasmine.getEnv();
		jasmineEnv.updateInterval = 1000;

		var htmlReporter = new jasmine.HtmlReporter();

		jasmineEnv.addReporter(htmlReporter);

		jasmineEnv.specFilter = function(spec) {
			return htmlReporter.specFilter(spec);
		};

		var specs = [];

		specs.push('spec/addition.spec');

		$(function(){
			require(specs, function(){
				jasmineEnv.execute();
			});
		});
	});

})();
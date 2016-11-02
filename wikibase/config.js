/* exported CONFIG */
var CONFIG = ( function ( window, $ ) {
	'use strict';

	var configDeploy = {
		language: 'en',
		api: {
			sparql: {
				uri: '/bigdata/namespace/wdq/sparql'
			},
			wikibase: {
				uri: 'https://www.wikidata.org/w/api.php'
			}
		},
		i18nLoad: function( lang ) {
			return $.i18n().load( 'i18n/' + lang + '.json', lang );
		}
	};

	var configLocal = $.extend( true, {}, configDeploy, {
		api: {
			sparql: {
				uri: 'https://query.wikidata.org/bigdata/namespace/wdq/sparql'
			}
		},
		i18nLoad: function( lang ) {
			return $.when(
					$.i18n().load( 'i18n/' + lang + '.json', lang ),
					$.i18n().load( 'node_modules/jquery.uls/i18n/' + lang + '.json', lang )
				);
		}
	} );

	var hostname = window.location.hostname.toLowerCase();

	if ( hostname === '' || hostname === 'localhost' || hostname === '127.0.0.1' ) {
		return configLocal;
	}

	return configDeploy;

} )( window, jQuery );

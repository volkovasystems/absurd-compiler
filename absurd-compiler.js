try{ var base = window; }catch( error ){ base = exports; }
( function module( base ){
	define( "absurdCompiler",
		[
			"jquery"
		],
		function construct( ){
			var headNode = $( "head" );
			headNode.ready( function onReady( ){
				var absurdCompiler = function absurdCompiler( namespace, GUID ){
					var styleNode = $( "<style></style>" );
					styleNode.attr( "guid", GUID );
					styleNode.attr( "namespace", namespace );
					return ( function compiler( error, css ){
						if( $( "style[namespace='" + namespace + "']" ).length != 0 ){
							return;
						}
						styleNode.html( css );
						headNode.append( styleNode );
					} );
				};
				base.absurdCompiler = absurdCompiler;
			} );
		} );
} )( base );
try{ var base = window; }catch( error ){ base = exports; }
( function module( base ){
	define( "absurdCompiler",
		[
			"jquery"
		],
		function construct( ){
			var headNode = $( "head" );
			headNode.append( styleNode );

			var absurdCompiler = function absurdCompiler( GUID ){
				var styleNode = $( "<style></style>" );
				styleNode.attr( "guid", GUID );

				return ( function compiler( error, css ){
					styleNode.html( css );	
				} );
			};
			
			base.absurdCompiler = absurdCompiler;
			return absurdCompiler;
		} );
} )( base );
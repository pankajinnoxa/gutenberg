/**
 * WordPress dependencies
 */
import { withSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import DeferredOption from './deferred';

export default withSelect( ( select ) => ( {
	isChecked: !! select( 'core/editor' ).getEditorSettings().enableCustomFields,
} ),
)(
	// Using DeferredOption here means the browser reload is called when the Options
	// modal is dismissed.
	DeferredOption
);

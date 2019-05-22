/**
 * External dependencies
 */
import { View } from 'react-native';
/**
 * Internal dependencies
 */
import styles from './style';

export const Blockquote = ( props ) => {
	return (
		<View style={ styles.wpBlockQuote } >
			{ props.children }
		</View>
	);
};

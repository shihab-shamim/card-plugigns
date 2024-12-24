import { FormTokenField } from '@wordpress/components';
import { withState } from '@wordpress/compose';

const MyFormTokenField = withState({
    tokens: [],
    suggestions: [ 'africa', 'america', 'antarctica', 'asia', 'europe', 'oceania' ],
})( ({ tokens, suggestions, setState }) => {
    const filteredSuggestions = (input) => {
        if (!input) {
            return suggestions;
        }
        return suggestions.filter(suggestion => suggestion.startsWith(input.toLowerCase()));
    };
    console.log(tokens);

    return (
        <FormTokenField
            value={tokens}
            suggestions={filteredSuggestions(tokens[tokens.length - 1] || '')}
            onChange={tokens => setState({ tokens })}
        />
    );
});

export default MyFormTokenField;

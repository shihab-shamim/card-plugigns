import { useState } from 'react';
import { QueryControls } from '@wordpress/components';

const QUERY_DEFAULTS = {
    category: 1,
    categories: [
        { id: 1, name: 'Category 1', parent: 0 },
        { id: 2, name: 'Category 1b', parent: 1 },
        { id: 3, name: 'Category 2', parent: 0 },
    ],
    maxItems: 20,
    minItems: 1,
    numberOfItems: 10,
    order: 'asc',
    orderBy: 'title',
};

const MyQueryControls = () => {
    const [query, setQuery] = useState(QUERY_DEFAULTS);

    const { category, categories, maxItems, minItems, numberOfItems, order, orderBy } = query;

    const updateQuery = (newQuery) => {
        // Only update the state if the new value differs from the current one
        if (JSON.stringify(query) !== JSON.stringify({ ...query, ...newQuery })) {
            setQuery(prevQuery => ({ ...prevQuery, ...newQuery }));
        }
    };

    return (
        <QueryControls
            maxItems={maxItems}
            minItems={minItems}
            numberOfItems={numberOfItems}
            order={order}
            orderBy={orderBy}
            categoriesList={categories}
            selectedCategoryId={category}
            onOrderByChange={(newOrderBy) => updateQuery({ orderBy: newOrderBy })}
            onOrderChange={(newOrder) => updateQuery({ order: newOrder })}
            onCategoryChange={(newCategory) => updateQuery({ category: newCategory })}
            onNumberOfItemsChange={(newNumberOfItems) => updateQuery({ numberOfItems: newNumberOfItems })}
        />
    );
};

export default MyQueryControls;

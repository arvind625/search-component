export const highlightText = (text, searchQuery, isItemSelected = false) => {
    const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
    return (
        <span>
            {parts.map((part) => (
                <span
                    className={part.toLowerCase() === searchQuery.toLowerCase() || isItemSelected ? 'highlight' : ''}
                >
                    {part}
                </span>
            ))}
        </span>
    );
};
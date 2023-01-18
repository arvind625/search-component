
import { highlightText } from './highlightText';

export const UserCard = ({ user, isSelected, onSelect, searchQuery }) => {
    return (
        <div
            onClick={() => onSelect(user)}
            onMouseOver={() => onSelect(user)}
            className={`user-card ${isSelected ? 'selected' : ''}`}
        >
            <div className="user-id">ID: {user.id}</div>
            <div className="user-name">
                {highlightText(user.name, searchQuery)}
            </div>
            <ul className="user-items">
                {user.items.filter((item) => (item === searchQuery.trim())).map((selectedItem) => (
                    <li key={selectedItem}>{highlightText(selectedItem, searchQuery.trim())} found in items</li>
                )
                )}
            </ul>
            <div className="user-address">
                {highlightText(user.address, searchQuery)}
            </div>
        </div >
    );
};

import { UserCard } from './UserCard';

export const UserCardList = ({ users, selectedUser, handleSelectUser, selectedCardRef, searchQuery }) => {
    return (
        <div className="search-list">
            {users.map((user) => (
                <UserCard
                    key={user.id}
                    user={user}
                    isSelected={user === selectedUser}
                    onSelect={handleSelectUser}
                    ref={user === selectedUser ? selectedCardRef : null}
                    searchQuery={searchQuery}
                />
            ))}
        </div>
    );
};
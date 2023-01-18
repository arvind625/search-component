import React, { useState, useEffect, useRef } from 'react';
import { SearchIcon } from './SearchIcon';
import { UserCardList } from './UserCardList';

export const SearchComponent = ({ users }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const selectedCardRef = useRef();

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        if (event.target.value.trim()) {
            setFilteredUsers(
                users.filter((user) => {
                    return (
                        user.name.includes(searchQuery) ||
                        user.address.includes(searchQuery) ||
                        user.pincode.includes(searchQuery) ||
                        user.items.some(item => item.includes(searchQuery))
                    );
                })
            );
        } else {
            setFilteredUsers([]);
        }
    };

    const handleSelectUser = (user) => {
        setSelectedUser(user);
    };

    const handleKeyDown = (event) => {
        const currentIndex = filteredUsers.indexOf(selectedUser);
        if (event.key === 'ArrowUp') {
            const nextIndex = currentIndex - 1;
            if (nextIndex >= 0) {
                setSelectedUser(filteredUsers[nextIndex]);
            }
        } else if (event.key === 'ArrowDown') {
            const nextIndex = currentIndex + 1;
            if (nextIndex < filteredUsers.length) {
                setSelectedUser(filteredUsers[nextIndex]);
            }
        }
    };

    useEffect(() => {
        if (selectedUser && selectedCardRef.current) {
            selectedCardRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center',
            });
        }
    }, [selectedUser, selectedCardRef]);

    return (
        <div className="search-container">
            <div className="search-box">
                <SearchIcon />
                <input
                    type="text"
                    class="search-input"
                    placeholder="Search used by ID, Address, nam..."
                    value={searchQuery}
                    onChange={handleSearch}
                    onKeyDown={handleKeyDown}
                />
            </div>
            {filteredUsers.length > 0 ? (
                <UserCardList
                    users={filteredUsers}
                    selectedUser={selectedUser}
                    handleSelectUser={handleSelectUser}
                    selectedCardRef={selectedCardRef}
                    searchQuery={searchQuery}
                />
            ) : (
                <NoResultsCard className="search-list" />
            )}
        </div >
    );
};

const NoResultsCard = () => {
    return <div className="no-results-card">No User Found</div>;
};

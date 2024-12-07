const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <div>
          <img src={avatar} alt={`${name}'s avatar`} width="48" />
            <p>{name}</p>
            <span style={{ color: isOnline ? 'green' : 'red' }}>
                {isOnline ? 'Online' : 'Offline'}
            </span>
      </div>
  );
};

export default FriendListItem;
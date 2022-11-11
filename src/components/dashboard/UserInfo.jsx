import React from 'react';

const UserInfo = (props) => {
    const{user} = props;
    return (
        <div className='user-info border'>
            <h3 className='text-left'>{user.username}</h3>
            <p className='card-title text-warning'>username</p>
        </div>
    );
};

export default UserInfo;

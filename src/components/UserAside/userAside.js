import React from 'react'
import defaultProfileImg from '../../img/defaultProfileImg.png'


const UserAside = ({ profileImageUrl, username }) => (
    <aside className="col-sm-2">
      <div className="panel panel-default">
        <div className="panel-body">
          <img
            // src={profileImageUrl || defaultProfileImg}
            src={profileImageUrl || defaultProfileImg}
            alt={username}
            width="200"
            height="200"
            className="img-thumbnail"
          />
            <h3>Mr/s {username}</h3>
        </div>
      </div>
    </aside>
  );
  
  export default UserAside;

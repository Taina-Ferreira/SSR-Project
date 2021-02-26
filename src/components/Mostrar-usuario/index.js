import React from 'react';

const MostrarUsuario = ({user}) => {

    return (
        <div className="container">
            <div className="row justify-content-center">
                <img src={user.avatar_url} width="200" style={{borderRadius: "50%"}}/>
            </div>
            <div className="row justify-content-center">
                <h4>{user.name}</h4>
            </div>
            <div className="row justify-content-center">
                <a href={user.html_url} target="_blank">GitHub</a>
            </div>
            <div className="row justify-content-center">
                <p>
                    {user.bio}
                </p>
            </div>
        </div>
    )
}
  

export default MostrarUsuario;

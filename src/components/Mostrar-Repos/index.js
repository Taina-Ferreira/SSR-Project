import React from 'react';

const MostrarRepos = ({repos}) => {

    const formatarData = (str) => {
        const data = new Date(str)
        return data.toLocaleDateString("pt")
    }


    const listRepos = repos.map((repo,index) => 
        <div className="card" style={{width: "18rem"}} key={index}>
            <div className="card-body">
                <h5 className="card-title">{repo.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Linguagem: {repo.language}</h6>
                <p className="card-text">Criado em: {formatarData(repo.created_at)}</p>
                <a href={repo.html_url} target="_blank" className="card-link">Acessar repositório</a>
            </div>
        </div>
    )

    return (
        <div className="card-columns">
            {listRepos}
        </div>
    )
}
  

export default MostrarRepos;

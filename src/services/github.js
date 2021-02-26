const githubUser = async () => {
    const res = await fetch('https://api.github.com/users/Taina-Ferreira')
    const usuario = await res.json()
    return usuario
}

const githubRepositorio = async () => {
    const res = await fetch ('https://api.github.com/users/Taina-Ferreira/repos')
    const repositorio = await res.json()
    return repositorio 
}

export { githubUser, githubRepositorio};
import MostrarUsuario from '../components/Mostrar-usuario';
import MostrarRepos from '../components/Mostrar-Repos';

import { githubUser, githubRepositorio } from '../services/github';


/* 
  Pagina ultiliza SSR.
*/

function HomePage(props) {
    return (
    <div className="container">
      <MostrarUsuario user={props.user}/>
      <hr/>
      <MostrarRepos repos={props.repos}/>
    </div>)
      
}

export const getStaticProps = async () =>{
  
  const user = await githubUser();
  const repos = await githubRepositorio();


  return {
      props: {
        user,
        repos
      },
  }
}


export default HomePage
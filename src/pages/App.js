import { useState } from 'react';
import githubLogo from '../assets/github.png'
import Input from '../components/Input';
import { ItemRepo } from '../components/ItemRepo/index,';
import { Container } from './styles';
import Button from '../components/Button';
import { api } from '../services/api';

function App() {

  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState('');

  const handleSearchRepo = async() => {
    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id){
      const isExist = repos.find(repo => repo.id == data.id)
      if(!isExist){
        setRepos(prev => [...prev, data])
        setCurrentRepo('')
        return
      }

    }   
    alert('repositório não encontrado')
  }

  
  return (
    <Container>
      <img src={githubLogo} alt="Github logo" width={72} height={72} />

      <Input value={currentRepo} onChange={e => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo repo={repo}/>)}
    </Container>
  );
}

export default App;

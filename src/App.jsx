import './App.css'
import { useForm }  from 'react-hook-form'
import axios from 'axios'
import { useEffect, useState } from 'react'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

const BASE_URL= "https://users-crud.academlo.tech/"

function App() {
  const [users, setUsers] = useState()

  const getAllUsers = () =>{
    const URL = `${BASE_URL}users/`
    axios.get(URL)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
  }

  const createUser = (data) =>{
    const URL = `${BASE_URL}users/`
    axios.post(URL,data)
    .then(res => {console.log(res.data)
      getAllUsers()
    })
    .catch(err => console.log(err))
  }

  console.log(users)

  useEffect(() =>{
    getAllUsers()
  },[])

  return (
    <div className="App">
     <h1>Hola mundo</h1>
     <FormUsers createUser={createUser} />
      {
        users?.map(user => (
          <UserCard key={user} user={user}/>
        ))
      }

      <UserCard/>
    </div>
  )
}

export default App

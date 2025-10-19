
import './App.css'
import ContactCard from './components/ContactCard'
export type User = {
  name: string;
  id: number;
  age: number;
  birth: string;
  status: boolean;
  grossSalary: number;
}

function App() {

  const user1: User = {
    name: "Hamza",
    id: 1,
    age: 40,
    birth: "17/5/1985",
    status: true,
    grossSalary: 50000
  }

  const user2: User = {
    name: "Ahmad",
    id: 2,
    age: 30,
    birth: "17/5/1995",
    status: true,
    grossSalary: 40000
  }


return (
  <>
    <ContactCard user={user2} />
  </>
)
}

export default App

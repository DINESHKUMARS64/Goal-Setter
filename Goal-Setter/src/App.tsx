import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CourseGoalList from './components/CourseGoalList'
import Header from './components/Header'
import GoalsImg from "./assets/GoalsImg.jpg"
import NewGoal from './components/NewGoal'

export type CourseGoal = {
  title:string;
  description:string;
  id:number;
}

function App() {
 const [goals, setGoals] = useState<CourseGoal[]>([]);

 function handleAddGoal(goal:string, summary:string) {
  setGoals((prevGoals) => {
    const newGoal: CourseGoal = {
      title: goal,
      description: summary,
      id: Math.random(),
    };
    return [...prevGoals, newGoal];
  });
 }

 function handleDeleteGoal(id:number){
   setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id));
 }

  return (
    <main>
      <Header image ={{src:GoalsImg,alt:"A list of goals"}}>
        <h1>My Course Goals</h1>
      </Header>
      <p>Hello bozo!</p>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  )
}

export default App

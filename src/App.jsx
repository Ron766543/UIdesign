import React from 'react'
import Layout from './App/Layout'

const userCards = [
  {
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    name: "Aarav Mehta",
    profession: "Software Engineer"
  },
  {
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    name: "Sophia Patel",
    profession: "UI/UX Designer"
  },
  {
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    name: "Rahul Sharma",
    profession: "Data Scientist"
  },
  {
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    name: "Emily Johnson",
    profession: "Product Manager"
  },
  {
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    name: "Karan Verma",
    profession: "Marketing Specialist"
  },
  {
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    name: "Olivia Brown",
    profession: "HR Manager"
  },
  {
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    name: "Michael Lee",
    profession: "Business Analyst"
  }
];



const App = () => {


  
  return (
    <div className='App'>
      <Layout cards = {userCards}/>
    </div>
  )
}

export default App
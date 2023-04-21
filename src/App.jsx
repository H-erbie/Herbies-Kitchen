import { useState } from 'react'
import './App.css'
import Dish from './Dish'
import data from './data'

function App() {
  const [filter, setFilter] = useState('All')
 const [activeStyle, setActiveStyle] = useState({
  backgroundColor: 'rgb(25, 25, 160)',
  color: 'white'
 })
  let newData = [];
  const acitveFilter = (filter, e) => {
    setFilter(filter);
  }
  let fill = [];
  {data.map((item) =>{ 
    let filt = item.filter
    for(let f in filt){
      if(!fill.includes(filt[f])){
        fill.push(filt[f])
      }
    }
  })}
 
  const displayDishes = (filter) => {
    newData = data.filter((data) => data.filter.includes(filter));
    return(
      newData.map((data) => (
        <Dish key={data.id} {...data}/>
      ))
    )
  }
   const openSideBar = () => {
    let one = document.querySelector('.one');
    let hide = document.querySelector('.hide');
    let two = document.querySelector('.two');
    let filters = document.querySelector('.filters')
    one.classList.toggle('right');
    hide.classList.toggle('disappear');
    two.classList.toggle('left');
    filters.classList.toggle('show')
   }
  let hnd;
  return (
    <main className="App">
      <div className="container">
        <h1 className="app-name">Herbie's Kitchen</h1>
        <div className="hamburger" onClick={() => openSideBar()}>
          <div className="bar one"></div>
          <div className="bar hide"></div>
          <div className="bar two"></div>
        </div>
        <ul className='filters'>
        { fill.map((filt, index) =>
          <li key={index} className='filter' onClick={(e) => acitveFilter(filt, e)} style={activeStyle}>{filt}</li>
        )} 
      </ul>
     <div className="dishes">
          {displayDishes(filter)}
     </div>
      </div>
    </main>
  )
}

export default App

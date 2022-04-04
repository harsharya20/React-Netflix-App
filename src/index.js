import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Components/Cards'
import './index.css'
import Sdata from './Components/Sdata'

// const ncard = (val) => {
//   return(
// <Card 
// imgsrc = {val.imgsrc} 
// title={val.title}
// sname={val.sname}
// link={val.link}
// />
//   )
// }

ReactDOM.render(
  <>
  <h1 className='heading_style'>List of Top 6 Netflix Series</h1>
{Sdata.map((val) => {
  return(
    <Cards 
    imgsrc = {val.imgsrc} 
    title={val.title}
    sname={val.sname}
    link={val.link}
    />
  )
})}
</>,
document.getElementById('root')
)

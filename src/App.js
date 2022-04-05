import React from 'react';
import Cards from './Components/Cards'
import Sdata from './Sdata'


const App = () => (
  <>
  <h1 className='heading_style'>List of Top 6 Netflix Series</h1>
{Sdata.map((val) => {
  return(
    <Cards 
    key = {val.id}
    imgsrc = {val.imgsrc} 
    title={val.title}
    sname={val.sname}
    link={val.link}
    />
  )
})}
</>
);

export default App
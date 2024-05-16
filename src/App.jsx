import Header from './component/header/header'
import './App.css'
import Cards from './component/cards/cards'
import Bookmarks from './component/bookmarks/bookmarks'
import { useState } from 'react'

function App() {
  const [select, setSelect] = useState([]);
  const [countCredit, setCountCredit] = useState(0);
  const [countPrice, setCountPrice] = useState(0);

  const handleSelect = (card) => {
    const {title, price, credit_hours} = card;
    let totalCredits = countCredit + credit_hours
    if(totalCredits > 20){
      alert("You can't take more than 20 credits")
      totalCredits = countCredit;
      return;
    }
    else{
      const selectTitle = select.find(st =>{
        return st === title;
      })
      if(!selectTitle){
        setSelect([...select, title]);
        setCountCredit(totalCredits);
        setCountPrice(countPrice + price);
      }
      

    }
      
  }


  return (
    <div className='max-w-7xl mx-auto bg-slate-100 p-4'>
      <Header />
      <main className='md:flex mt-6 gap-3'>
        <Cards handleSelect={handleSelect} />
        <Bookmarks select= {select} countCredit= {countCredit} countPrice= {countPrice}  />
      </main>
    </div>
  )
}

export default App

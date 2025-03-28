import './css/index.css'
import './App.css';
import Createlist from './components/Createlist';
import { useState } from 'react';
import Removelist from './components/Removelist';
import UploadFile from './components/UploadFile';
import { Route, Routes } from 'react-router-dom';

function App() {
  let [lists, setLists] = useState([])

  let Task = (value) => {

    console.log(value)
    setLists(prev =>
    ([
      ...prev,
      value
    ])
    )
  }

  let deleted = (i) => {
    setLists(lists.filter((_, index) => index !== i))
  }

  console.log(lists)
  return (
    <div>
      <Routes>
        <Route path='/' Component={UploadFile} />
        <Route path='/data' Component={Createlist}></Route>
      </Routes>

      {/* <Removelist send={lists} cancel={deleted} /> */}

    </div>
  )
}

export default App;

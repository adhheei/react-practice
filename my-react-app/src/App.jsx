// function App() {
//   return (
//     <div>
//     <h1>My name is Adithya</h1>
//     <p>Favorite Color : Blue</p>
//     <p>Favorite Food : Biriyani</p>
//     </div>
//   );
// }

// export default App;

// import "./App.css"

// function App(){
//   const name ="Adhi";
//   const age =22;

//   return(
//     <div className="card">
//       <h1>{name}</h1>
//       <p>Age:{age}</p>
//       <p>I am learing React</p>
//     </div>
//   )
// }

// export default App;

// import React from 'react'
// import User from './User'

// function App() {
//   return (
//     <div>
//       <User name="Adhi" age={25} city="malappuram"/>
//       <User name="abhi" age={28} city="chalavara"/>
//       <User name="sachu" age={17} city="calicut"/>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

function App() {

  const [count,setcount] = useState(0);

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setcount(count+1)}>+</button>
      <button onClick={()=>setcount(count-1)}>-</button>
    </div>
  )
}


export default App

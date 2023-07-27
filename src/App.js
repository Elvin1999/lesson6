import "./App.css";
import { useState } from "react";
import Shapes from "./Shapes";

let nextId = 0;
function App() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  function addArtist() {
    // artists.push({
    //   id:++nextId,
    //   name:name
    // });

    // setArtists([...artists, {
    //   id: ++nextId,
    //   name: name,
    // }]);

    setArtists([{
      id: ++nextId,
      name: name,
    },...artists]);

    console.log(artists);
  }

  function removeItem(a){
    setArtists(artists.filter(artist=>artist.id!==a.id));
  }
  
  return (
    <div>
      {/* <h1>Our artists</h1>
      <section>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={addArtist}>Add</button>
      </section>
      <ul>
        {artists.map((a) => (
          <li key={a.id}><span><b>{a.id}</b> </span> : {a.name} 
          <button onClick={(e)=>{
            removeItem(a);
          }}>Delete</button>
          </li>
        ))}
      </ul> */}
      <Shapes></Shapes>
    </div>
  );
}

export default App;

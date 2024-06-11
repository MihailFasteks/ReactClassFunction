import React from 'react';
import './App.css';

// const user = {
//   name: 'Bill Gates',
//   birthDate: '18.05.1963',
//   imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvaZKaU_8W4g0bwCtG_3spWmXRxsi8tf1oCA&s',
//   imageW: 400,
//   imageH: 350,
//   biography: 'Something about Bill Gates. Owner of Microsoft. He likes dogs!'
// };
// class Name extends React.Component {
//   render() {
//     return <h1>{user.name}</h1>;
//   }
// }
// class Desc extends React.Component {
//   render() {
//     return <h1>{user.biography}</h1>;
//   }
// }
// class Birth extends React.Component {
//   render() {
//     return <h1>{user.birthDate}</h1>;
//   }
// }
// class Img extends React.Component {
//   render() {
//     return <img
      
//     src={user.imageUrl}
//     alt={'Фото ' + user.name}
//     style={{
//       width: user.imageW,
//       height: user.imageH
//     }}
    
//   />;
//   }
// }


const infoClub = {
  name: 'Real Madrid Club',
  birthDate: '18.05.1963',
  city: 'Madrid',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvaZKaU_8W4g0bwCtG_3spWmXRxsi8tf1oCA&s',
  imageW: 400,
  imageH: 350,
  cups: 33,
  trophy: 67,
  goals: 61,
  team: ['Franko Gonsales', 'Auriko Etanio', 'Gese Onitao', 'Samuel Garcia', 'Ben Alexes']
};

function Block1(){
  return (
    <div>
<h1>{infoClub.name}</h1>
<h3>{infoClub.city}</h3>
<h3>{infoClub.birthDate}</h3>
<img src='https://img.uefa.com/imgml/TP/teams/logos/240x240/50051.png'
style={{
        width: infoClub.imageW,
        height: infoClub.imageH
}}></img>
    </div>

  );
}
function Achievements(){
  return (
    <div>
      <h2>Cups: {infoClub.cups}</h2>
      <h2>Trophys: {infoClub.trophy}</h2>
      <h2>Goals: {infoClub.goals}</h2>
    </div>
  )
}
function List(){
 
    return (
      <ul className='LIST'>
        {infoClub.team.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    );
  
}
function App() {
  return (
   <div className='App'>

 {/* <Img></Img>
        <Name></Name>
        <Birth></Birth>
        <Desc></Desc> */}
<Block1></Block1>
<Achievements></Achievements>
<List></List>

   </div>
  );
}

export default App;

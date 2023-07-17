// import React, { Component } from 'react';
// import emblemImage from './1.png';
// class ClubInfo extends Component {
//   render() {
//     const { name, city, founded, emblem } = this.props;

//     return (
//       <div className="club-info">
//         <h2>{name}</h2>
//         <p>Місто: {city}</p>
//         <p>Засновано: {founded}</p>
//         <img src={emblem} alt="Герб клубу" className="club-emblem" />
//       </div>
//     );
//   }
// }

// class ClubAchievements extends Component {
//   render() {
//     const { medals, cups, goals } = this.props;

//     return (
//       <div className="club-achievements">
//         <h3>Досягнення</h3>
//         <p>Медалі: {medals}</p>
//         <p>Кубки: {cups}</p>
//         <p>Забиті голи: {goals}</p>
//       </div>
//     );
//   }
// }

// class ClubSquad extends Component {
//   render() {
//     const { squad } = this.props;

//     return (
//       <div className="club-squad">
//         <h3>Склад команди</h3>
//         <ul>
//           {squad.map((player, index) => (
//             <li key={index}>{player}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// // Головний компонент додатку
// class App extends Component {
//   render() {
//     const clubs = [
//       {
//         name: 'Челси',
//         city: 'Лондон',
//         founded: '1905',
//         emblem: emblemImage,
//         medals: 15,
//         cups: 23,
//         goals: 2200,
//         squad: ['Гравець 1', 'Гравець 2', 'Гравець 3', '...'],
//       },
//     ];

// const styles = ['style1', 'style2', 'style3', 'style4'];
//     const randomStyle = styles[Math.floor(Math.random() * styles.length)];

//     return (
//       <div className={`app ${randomStyle}`}>
//         <ClubInfo
//           name={clubInfo.name}
//           city={clubInfo.city}
//           founded={clubInfo.founded}
//           emblem={clubInfo.emblem}
//         />
//         <ClubAchievements
//           medals={clubAchievements.medals}
//           cups={clubAchievements.cups}
//           goals={clubAchievements.goals}
//         />
//         <ClubSquad squad={clubSquad} />
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import emblemImage from './1.png';

class ClubInfo extends Component {
  render() {
    const { name, city, founded, emblem } = this.props;

    return (
      <div className="club-info">
        <h2>{name}</h2>
        <p>Місто: {city}</p>
        <p>Засновано: {founded}</p>
        <img src={emblem} alt="Герб клубу" className="club-emblem" />
      </div>
    );
  }
}

class ClubAchievements extends Component {
  render() {
    const { medals, cups, goals } = this.props;

    return (
      <div className="club-achievements">
        <h3>Досягнення</h3>
        <p>Медалі: {medals}</p>
        <p>Кубки: {cups}</p>
        <p>Забиті голи: {goals}</p>
      </div>
    );
  }
}

class ClubSquad extends Component {
  render() {
    const { squad } = this.props;

    return (
      <div className="club-squad">
        <h3>Склад команди</h3>
        <ul>
          {squad.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    const clubs = [
      {
        name: 'Челси',
        city: 'Лондон',
        founded: '1905',
        emblem: emblemImage,
        medals: 15,
        cups: 23,
        goals: 2200,
        squad: ['Гравець 1', 'Гравець 2', 'Гравець 3', '...'],
      },
    ];

    const styles = ['style1', 'style2', 'style3', 'style4'];
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];

    return (
      <div className={`app ${randomStyle}`}>
        {clubs.map((club, index) => (
          <div key={index}>
            <ClubInfo
              name={club.name}
              city={club.city}
              founded={club.founded}
              emblem={club.emblem}
            />
            <ClubAchievements medals={club.medals} cups={club.cups} goals={club.goals} />
            <ClubSquad squad={club.squad} />
          </div>
        ))}
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
export default App;
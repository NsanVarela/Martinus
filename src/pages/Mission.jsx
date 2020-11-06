import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import imgMission1 from '../assets/images/missions/imgMission1.svg';
import imgMission2 from '../assets/images/missions/imgMission2.svg';
import imgMission3 from '../assets/images/missions/imgMission3.svg';
import imgMission4 from '../assets/images/missions/imgMission4.svg';

const useStyles = makeStyles({
  mission: {
    backgroundColor: '#4973b9',
    height: '100%',
    padding: '3% 5% 3% 5%',
  },
  title: {
    marginBottom: '20px',
    color: '#FFFFFF',
  },
  body: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  missionContent: {
    display: 'flex',
    flexDirection: 'column',
    listStyleType: 'none',
    textAlign: 'center',
    alignItems: 'center',
  },
  missionIcon: {
    width: '80px',
    paddingTop: '20px',
  },
  missionText: {
    color: '#FFFFFF',
    maxWidth: '50%',
    paddingTop: '20px',
  },
});

const missions = [
  {
    name: 'mission_#1',
    icon: imgMission1,
    content: 'Réhabiliter l’établissement et ses infrastructures',
  },
  {
    name: 'mission_#2',
    icon: imgMission2,
    content: 'Fournir du matériel et des fournitures scolaires',
  },
  {
    name: 'mission_#3',
    icon: imgMission3,
    content: 'Favoriser l’accès des filles à l’éducation',
  },
  {
    name: 'mission_#4',
    icon: imgMission4,
    content: 'Offrir des cadeaux aux enfants à l’occasion des fêtes',
  },
];

export default function Mission() {
  const classes = useStyles();
  return (
    <div id="missions">
      <div className={classes.mission} id="mission">
        <h3 className={classes.title} offset={-80}>
          Nos missions
        </h3>
        <p className={classes.body}>
          {missions.map(d => {
            return (
              <ul className={classes.missionContent} key={d.name}>
                <li className={classes.missionIcon}>
                  <img src={d.icon} alt="icon mission" />
                </li>
                <li className={classes.missionText}>{d.content}</li>
              </ul>
            );
          })}
        </p>
      </div>
    </div>
  );
}

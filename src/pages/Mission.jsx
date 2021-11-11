import React from 'react';
import { makeStyles } from '@material-ui/core';
import imgMission1 from '../assets/images/missions/imgMission1.svg';
import imgMission2 from '../assets/images/missions/imgMission2.svg';
import imgMission3 from '../assets/images/missions/imgMission3.svg';
import imgMission4 from '../assets/images/missions/imgMission4.svg';

const useStyles = makeStyles(theme => ({
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
    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-evenly',
    },
  },
  missionContent: {
    display: 'flex',
    flexDirection: 'column',
    listStyleType: 'none',
    textAlign: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      maxWdith: '3rem',
    },
  },
  missionIcon: {
    width: '5.7rem',
    paddingTop: '1.4rem',
    [theme.breakpoints.down('md')]: {
      width: '3rem',
      paddingTop: '0.5rem',
    },
  },
  missionText: {
    color: '#FFFFFF',
    maxWidth: '50%',
    paddingTop: '1.4rem',
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
      fontSize: '0.6rem',
      paddingTop: '0.5rem',
      lineHeight: '1.5',
    },
  },
}));

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
              <ul className={classes.missionContent} key={d.id}>
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

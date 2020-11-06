import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  who: {
    backgroundColor: '#efefef',
    height: '100%',
    padding: '5% 5% 5% 5%',
  },
  title: {
    marginBottom: '20px',
    color: '#4973b9',
  },
  subTitle: {
    marginBottom: '20px',
    color: '#333333',
    fontSize: '34px',
    fontWeight: 'lighter',
    lineHeight: '2.6rem',
  },
  body: {
    marginBottom: '2%',
    textAlign: 'justify',
  },
});

export default function Who() {
  const classes = useStyles();
  return (
    <div className={classes.who}>
      <div id="who" offset={-80}>
        <div>
          <h3 className={classes.title}>Qui sommes-nous ?</h3>
          <h3 className={classes.subTitle}>
            Martinu&apos;s Man Elende,
            <br />
            association à but non lucratif
          </h3>
          <p className={classes.body}>
            Association Loi 1901, Martinu’s Man-Elende a pour objectif d’encourager l’éducation dans une école primaire
            de Leyong,
            <a target="_blank" rel="noopener noreferrer" href="https://bit.ly/3h4ZqfY">
              {' '}
              un village situé dans la commune de la Lekié au Cameroun
            </a>
            . La création de cette association me paraissait évidente. Originaire du Cameroun, j’ai très vite compris
            que la réussite professionnelle passait par une éducation solide. La réflexion s’est poursuivie lors d’un
            dans le village maternel de Leyong, dans la région du centre où j’ai rencontré des familles défavorisées qui
            privilégiaient l’éducation du premier enfant au détriment des autres, faute de moyens. Les actions menées en
            faveur de l’association et les efforts quotidiens des membres de l’équipe ne pourraient être efficaces sans
            votre soutien.
          </p>
          <p className={classes.signature}>
            - Martin ATANGANA<br></br>Président de l&apos;association
          </p>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    who: {
        backgroundColor: '#efefef',
        height: 'calc(65vh - 2rem - 50px)',
    },
    title: {
        paddingTop: '90px',
        marginLeft: '90px',
        marginBottom: '20px',
        color: '#4973b9'
    },
    subTitle: {
        marginLeft: '90px',
        marginBottom: '20px',
        color: '#333333',
        fontSize: '34px',
        fontWeight: 'lighter'
    },
    body: {
        marginLeft: '90px',
        marginBottom: '20px',
        maxWidth: '85%',
        textAlign: 'justify',
    },
    signature: {
        marginLeft: '90px'
    }
});

export default function Who() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.who} id="who">
                <h3 className={classes.title}>Qui sommes-nous ?</h3>
                <h3 className={classes.subTitle}>Martinu's Man Elende,<br></br>
                    association à but non lucratif
                </h3>
                <p className={classes.body}>
                Association Loi 1901, Martinu’s Man-Elende a pour objectif d’encourager l’éducation dans une école primaire de Leyong,
                <a target="_blank" rel="noreferrer" href={`https://bit.ly/3h4ZqfY`}> un village situé dans la commune de la Lekié au Cameroun</a>. 
                La création de cette association me paraissait évidente. Originaire du Cameroun, j’ai très vite compris que la réussite professionnelle 
                passait par une  éducation solide. La réflexion s’est poursuivie lors d’un retour dans le village maternel de Leyong, dans la région 
                du centre où j’ai rencontré des familles défavorisées qui privilégiaient l’éducation du premier enfant au détriment 
                des autres, faute de moyens. Les actions menées en faveur de l’association et les efforts quotidiens des membres de 
                l’équipe ne pourraient être efficaces sans votre soutien.
                </p>
                <p className={classes.signature}>
                    - Martin ATANGANA<br></br>Président de l'association
                </p>
            </div>
        </>
    )
}

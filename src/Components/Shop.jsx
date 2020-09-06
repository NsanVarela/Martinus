import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import maleTshirt from '../assets/images/shop/maleTshirts.png';
import femaleTshirt from '../assets/images/shop/femaleTshirts.png';
import roundShadow from '../assets/images/shop/roundShadow.png';

const useStyles = makeStyles({
    shop: {
        backgroundColor: '#FFFFFF',
        height: 'calc(100vh - 2rem - 50px)',
    },
    title: {
        paddingTop: '70px',
        marginBottom: '90px',
        textAlign: 'center',
        color: '#4973b9',
        fontSize: '30px',
    },
    body: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    maleTshirt: {
        position: 'relative',
    },
    maleTshirtImg: {
        height: '400px',
        marginLeft: '50px',
    },
    maleShadowImg: {
        top: '200px',
        left: '115px',
        position: 'absolute',
        width: '250px',
    },
    text: {
        color: '#333333',
        paddingTop: '70px',
        maxWidth: '230px',
        minWidth: '230px',
        textAlign: 'center',
    },
    orderBtn: {
        zIndex: 10,
        backgroundColor: '#0cc722',
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginTop: '130px',
    },
    femaleTshirt: {
        position: 'relative',
    },
    femaleTshirtImg: {
        height: '400px',
        marginRight: '50px',
    },
    femaleShadowImg: {
        top: '200px',
        left: '55px',
        position: 'absolute',
        width: '250px',
    },
});

export default function Shop() {
    const classes = useStyles();
    return <>
        <div className={classes.shop} id="shop">
        <h3 className={classes.title}>
            Soutenez notre association<br></br>en achetant nos t-shirts solidaires.
        </h3>
        <div className={classes.body}>
            <div className={classes.maleTshirt}>
                <img className={classes.maleTshirtImg} src={maleTshirt} alt="t-sirt homme"></img>
                <img className={classes.maleShadowImg} src={roundShadow} alt="ombre"></img>
            </div>
            <div>
                <p className={classes.text}>
                Le t-shirt Martinu’s est un moyen pour  l’association de véhiculer ses valeurs à travers un logo 
                fort de sens.  En référence au mythe chrétien de Saint Martin de Tours  qui avait séparé son manteau 
                en deux pour venir en aide à son prochain, le logo, met en avant un accessoire de mode plus moderne : 
                un t-shirt, séparé en deux à l’aide d’une épée.
                </p>
                <Button className={classes.orderBtn} variant="contained">je commande par email</Button>
            </div>
            <div className={classes.femaleTshirt}>
                <img className={classes.femaleTshirtImg} src={femaleTshirt} alt="t-sirt femme"></img>
                <img className={classes.femaleShadowImg} src={roundShadow} alt="ombre"></img>
            </div>
        </div>
        </div> 
    </>;
}

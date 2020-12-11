import React from 'react';
import { makeStyles } from '@material-ui/core';

import maleTshirt from '../../assets/images/shop/maleTshirts.png';
import femaleTshirt from '../../assets/images/shop/femaleTshirts.png';
import Controls from '../controls/Controls';
import shopService from '../../services/shopService';
import Popup from '../controls/Popup';
import ShopForm from '../../modals/shop/ShopForm';
import Notification from '../controls/Notification';

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  // BtnWrap,
  Column2,
  Column3,
  ImgWrap,
  Img1,
  Img2,
  BtnWrap,
} from './InfoElements';

const useStyles = makeStyles({
  shopBtn: {
    zIndex: 10,
    backgroundColor: '#0cc722',
    color: '#FFFFFF',
    fontWeight: 'bold',
    minWidth: '90px',
    margin: 'auto',
    marginTop: '30px',
  },
});

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, alt }) => {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = React.useState(false);
  const [notify, setNotify] = React.useState({ isOpen: false, message: '', status: '' });
  const filledForm = async (cart, resetForm) => {
    const result = await shopService(cart);
    resetForm();
    setOpenPopup(false);
    setNotify({ isOpen: true, message: result.message, status: result.status });
  };
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <ImgWrap>
                <Img1 src={maleTshirt} alt={alt} />
              </ImgWrap>
            </Column1>
            <Column2>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Controls.Button
                    text="JE COMMANDE PAR EMAIL"
                    variant="contained"
                    // startIcon={<ContactsIcon />}
                    className={classes.shopBtn}
                    onClick={() => setOpenPopup(true)}
                  />
                </BtnWrap>
              </TextWrapper>
            </Column2>
            <Column3>
              <ImgWrap>
                <Img2 src={femaleTshirt} alt={alt} />
              </ImgWrap>
            </Column3>
          </InfoRow>
        </InfoWrapper>
        <Popup title="Formulaire de commande" openPopup={openPopup} setOpenPopup={setOpenPopup}>
          <ShopForm filledForm={filledForm} />
        </Popup>
      </InfoContainer>
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
};

export default InfoSection;

import React from 'react';
import { IonHeader } from '@ionic/react';

function ArtHeader() {
  return (
    <IonHeader
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
        backgroundColor: '#F9DF55',
      }}
      mode='ios'>

        <img src='assets/images/af_logo.png' alt='AF Logo' />

    </IonHeader>
  );
}

export default ArtHeader;

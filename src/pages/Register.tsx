import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider } from '@ionic/react';

export const Register: React.FC = () => {

  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();

  return (
    <IonPage>
      <IonContent>
          <h2>Hello!</h2>
        <IonList>
          <IonItem style={{padding: '0 2rem 0 1rem'}}>
            <IonInput value={text} placeholder="Full Name" onIonChange={e => setText(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem style={{padding: '0 2rem 0 1rem'}}>
            <IonInput value={text} placeholder="Phone" onIonChange={e => setText(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem style={{padding: '0 2rem 0 1rem'}}>
            <IonInput value={text} placeholder="Full Name" onIonChange={e => setText(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem style={{padding: '0 2rem 0 1rem'}}>
            <IonInput value={text} placeholder="Full Name" onIonChange={e => setText(e.detail.value!)}></IonInput>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
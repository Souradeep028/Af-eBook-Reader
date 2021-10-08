import { IonContent, IonPage, IonRouterLink } from '@ionic/react';
import WelcomeHeader from '../components/WelcomeHeader';
import './Welcome.css';

function Welcome() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <WelcomeHeader />
        <h3 className='title2'>Thank you for joining our tribe</h3>
        <p className='access'>
          Access your E-book{' '}
          <span>
            <IonRouterLink href='/read' style={{ color: '#2501FE' }}>
              here
            </IonRouterLink>{' '}
          </span>
        </p>
        <p className='profile'>
          Complete Your{' '}
          <IonRouterLink href='/' style={{ color: '#2501FE' }}>
            Profile
          </IonRouterLink>{' '}
          To Receive{' '}
          <span style={{ fontWeight: 800 }}>
            Personalized Art Recommendations
          </span>
        </p>
      </IonContent>
    </IonPage>
  );
}

export default Welcome;

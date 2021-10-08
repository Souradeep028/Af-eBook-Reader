import { IonContent, IonPage, IonButton } from '@ionic/react';
import ArtHeader from '../components/ArtHeader';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <ArtHeader />
      <IonContent fullscreen>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <img
            src='assets/images/pdf-cover.png'
            alt='PDF Cover'
            style={{
              padding: '2rem 1.2rem 0rem 1.4rem',
              width: '30rem',
              margin: '0 auto',
            }}
          />
          <h3 className='title1'>
            Cheat Sheet to the Art World:
            <br />
            An Art Fervour Guide
          </h3>

          <IonButton
            className='readButton'
            mode='ios'
            shape='round'
            href='/welcome'>
            Read Now
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;

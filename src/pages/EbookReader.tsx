import { IonHeader, IonTitle } from '@ionic/react';
import { Viewer } from '@react-pdf-viewer/core';
import {
  RenderCurrentScaleProps,
  RenderZoomInProps,
  RenderZoomOutProps,
  zoomPlugin,
} from '@react-pdf-viewer/zoom';
import { Worker } from '@react-pdf-viewer/core';
import { AiOutlineZoomIn, AiOutlineZoomOut } from 'react-icons/ai';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

const EbookReader = () => {
  const zoomPluginInstance = zoomPlugin();
  const { CurrentScale, ZoomIn, ZoomOut } = zoomPluginInstance;

  return (
    <div
      style={{
        border: '0px solid rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}>
      <IonHeader
        mode='ios'
        style={{ backgroundColor: '#212121', height: '35px' }}>
        <IonTitle>AF Reader</IonTitle>
      </IonHeader>

      <div
        style={{
          flex: 1,
          overflow: 'hidden',
          padding: '0rem !important',
        }}>
        <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js'>
          <Viewer
            fileUrl='assets/af-ebook.pdf'
            plugins={[zoomPluginInstance]}
            theme='dark'
          />
        </Worker>
      </div>

      <div
        style={{
          height: '3rem',
          alignItems: 'center',
          backgroundColor: '#212121',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          display: 'flex',
          justifyContent: 'center',
          padding: '4px',
        }}>
        <div style={{ padding: '0' }}>
          <ZoomOut>
            {(props: RenderZoomOutProps) => (
              <button
                style={{
                  background: 'none',
                  color: '#ffffff',
                  cursor: 'pointer',
                }}
                onClick={props.onClick}>
                <AiOutlineZoomOut style={{ fontSize: '28px' }} />
              </button>
            )}
          </ZoomOut>
        </div>
        <div
          style={{
            padding: '0',
            color: 'white',
            width: '4rem',
            textAlign: 'center',
          }}>
          <CurrentScale>
            {(props: RenderCurrentScaleProps) => (
              <>{`${Math.round(props.scale * 100)}%`}</>
            )}
          </CurrentScale>
        </div>
        <div style={{ padding: '0' }}>
          <ZoomIn>
            {(props: RenderZoomInProps) => (
              <button
                style={{
                  background: 'none',
                  color: '#ffffff',
                  cursor: 'pointer',
                }}
                onClick={props.onClick}>
                <AiOutlineZoomIn style={{ fontSize: '28px' }} />
              </button>
            )}
          </ZoomIn>
        </div>
      </div>
    </div>
  );
};

export default EbookReader;

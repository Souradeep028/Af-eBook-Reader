function LoggedInHeader() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
          backgroundColor: '#F9DF55',
        }}>
        <img
          src='assets/images/asset02.png'
          alt='AF Logo'
          style={{
            height: '22rem',
            maxWidth: '160rem',
            marginTop: '10rem',
            marginLeft: '3rem',
          }}
        />
      </div>
    );
  }
  
  export default LoggedInHeader;
  
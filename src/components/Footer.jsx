import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={memberStyle}>
          <h3 style={nameStyle}>
            Siyabonga Hlongwane
            <a href="https://github.com/202404-Y-ZA-FSW/movies-project-siya-and-sharon" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
              <svg style={iconStyle} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.24 1.838 1.24 1.07 1.835 2.809 1.304 3.495.997.108-.776.418-1.305.76-1.605-2.665-.305-5.467-1.335-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.524.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.874.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.81 1.1.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.694.825.575C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/siyabongahlongwane" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
              <svg style={iconStyle} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>LinkedIn</title>
                <path d="M19.545 3H4.455C3.65 3 3 3.65 3 4.455v15.09C3 20.35 3.65 21 4.455 21h15.09C20.35 21 21 20.35 21 19.545V4.455C21 3.65 20.35 3 19.545 3zM8.485 18.031H5.963V9.478h2.522v8.553zm-1.261-9.77a1.458 1.458 0 1 1 0-2.916 1.458 1.458 0 0 1 0 2.916zm12.168 9.77h-2.522v-4.262c0-1.015-.018-2.318-1.414-2.318-1.414 0-1.63 1.106-1.63 2.248v4.332H9.326V9.478h2.422v1.166h.035c.338-.64 1.162-1.316 2.392-1.316 2.56 0 3.035 1.687 3.035 3.879v5.824z"/>
              </svg>
            </a>
          </h3>
          <p style={copyrightStyle}>© 2024 Siyabonga Hlongwane</p>
        </div>
        <div style={memberStyle}>
          <h3 style={nameStyle}>
            Sharon Matjila
            <a href="https://github.com/202404-Y-ZA-FSW/movies-project-siya-and-sharon" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
              <svg style={iconStyle} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.24 1.838 1.24 1.07 1.835 2.809 1.304 3.495.997.108-.776.418-1.305.76-1.605-2.665-.305-5.467-1.335-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.524.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.874.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.81 1.1.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.694.825.575C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a href="http://www.linkedin.com/in/sharon-matjila-b82b83217" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}>
              <svg style={iconStyle} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>LinkedIn</title>
                <path d="M19.545 3H4.455C3.65 3 3 3.65 3 4.455v15.09C3 20.35 3.65 21 4.455 21h15.09C20.35 21 21 20.35 21 19.545V4.455C21 3.65 20.35 3 19.545 3zM8.485 18.031H5.963V9.478h2.522v8.553zm-1.261-9.77a1.458 1.458 0 1 1 0-2.916 1.458 1.458 0 0 1 0 2.916zm12.168 9.77h-2.522v-4.262c0-1.015-.018-2.318-1.414-2.318-1.414 0-1.63 1.106-1.63 2.248v4.332H9.326V9.478h2.422v1.166h.035c.338-.64 1.162-1.316 2.392-1.316 2.56 0 3.035 1.687 3.035 3.879v5.824z"/>
              </svg>
            </a>
          </h3>
          <p style={copyrightStyle}>© 2024 Sharon Matjila</p>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '10px 0',
  width: '100%',
  textAlign: 'center',
  marginTop: 'auto',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
};

const memberStyle = {
  margin: '0 20px',
};

const nameStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
};

const iconStyle = {
  width: '24px',
  height: '24px',
};

const iconLinkStyle = {
  color: 'white',
  textDecoration: 'none',
};

const copyrightStyle = {
  fontSize: '12px',
  marginTop: '5px',
};

const pageContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const contentStyle = {
  flex: '1',
};

const App = () => {
  return (
    <div style={pageContainerStyle}>
      <div style={contentStyle}>
        {}
      </div>
      <Footer />
    </div>
  );
};

export default App;

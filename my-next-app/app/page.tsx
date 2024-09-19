export default function Home() {
  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={titleStyle}>Hello World</h1>
      </div>
    </div>
  );
}

// Inline CSS adding
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f0f8ff',
};

const boxStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
  backgroundColor: '#ffffff', 
};
const titleStyle = {
  fontSize: '3rem',
  color: '#ff4500', 
  fontFamily: 'Arial, sans-serif',
  animation: 'fadeIn 2s ease-in-out, bounce 2s infinite', 
};
if (typeof document !== 'undefined') {
  const styleSheet = document.styleSheets[0];
  const keyframes = `
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-15px);
      }
    }
  `;
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
}


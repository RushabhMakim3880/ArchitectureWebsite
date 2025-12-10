export default function Loading() {
    return (
        <div style={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 9999
        }}>
            <div style={{
                width: '40px',
                height: '40px',
                border: '2px solid #f3f3f3',
                borderTop: '2px solid #333',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
            }} />
            <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
}

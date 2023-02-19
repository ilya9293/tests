import { useRef } from 'react';

const App = () => {
  const scrollToFooter = useRef(null);

  const handleClick = () => {
    scrollToFooter.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    <>
      <button type="button" className="button" onClick={handleClick}>
        Down
      </button>
      <div className="middle">Middle</div>
      <div ref={scrollToFooter} className="footer">
        Footer
      </div>
    </>
  );
};

export default App;

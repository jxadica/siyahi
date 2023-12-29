
import React, { useState , useEffect} from 'react';
import './CustomButton.css'; // Make sure to adjust the import for your CSS file

const CustomButton = () => {
    useEffect(() => {
       
    
        const handleMouseOver = () => {
            showPopup();
        };
    
        document.querySelector('.myButton').addEventListener('mouseover', handleMouseOver);
    
        
        return () => {
            document.querySelector('.myButton').removeEventListener('mouseover', handleMouseOver);
        };
      }, []);
      useEffect(() => {
       
        const handleMouseOut = () => {
            hidePopup();
        };
    
        document.querySelector('.myButton').addEventListener('mouseout', handleMouseOut);
    
        
        return () => {
            document.querySelector('.myButton').removeEventListener('mouseout', handleMouseOut);
        };
      }, []);
    
    function showPopup() {
        document.getElementById('popup').style.display = 'block';
    }

    function hidePopup() {
        document.getElementById('popup').style.display = 'none';
    }

  const [text1, setText1] = useState('');
  const [button2Color, setButton2Color] = useState('white');
  const [text2, setText2] = useState('');

  const handleClick1 = () => {
    setText1((prevText) => (prevText === '' ? 'Hello World' : ''));
  };

  const handleClick2 = () => {
    if (text2 === '') {
      setButton2Color('red');
      setText2('Warning message');
    } else {
      setButton2Color('white');
      setText2('');
    }
  };


  return (
    <div className="Button">
      <button className='text1' onClick={handleClick1}> Text </button>
      <button
        className="warning"
        onClick={handleClick2}
        style={{ backgroundColor: button2Color }}
      >
        Warning
      </button>
      <button className='myButton' >Hint</button>
      <div id="popup">
    <p>boom</p>
</div>
      
        <p className=" styleText">{text1}</p>
        <p className="styleWarning">{text2}</p>
      
    </div>
  );
};

export default CustomButton;

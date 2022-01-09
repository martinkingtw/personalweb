import React from 'react';
import WebFont from 'webfontloader';
import { Button, Input, Row, Col } from 'antd';
import '../App.css';

function Grounding() {
  return (
    <div className="App">
      <header className="App-header">
          Visualization of<br />
          Visual Grouding in Vision Language Transformers
      </header>
      <body className="App-body">
        <div className="vision-area">
          <div className="vision-img-container">
            <img className="vision-img" src="/10350842.jpg" alt="Upload Picture" />
            <img className="vision-img vision-img-overlap red" src='/10350842_boat_pred.png' alt='Upload Picture'/>
            <img className="vision-img vision-img-overlap green" src='/10350842_jacket_pred.png' alt='Upload Picture'/>
            <img className="vision-img vision-img-overlap blue" src='/10350842_man_pred.png' alt='Upload Picture'/>
          </div>
        </div>
        <div className="vision-input">
          <Button type="primary" ghost>
            Upload
          </Button>
        </div>
        <div className="language-input">
          <Input>

          </Input>
        </div>
      </body>
    </div>
  );
}

WebFont.load({
  google: {
    families: ['Megrim']
  }
});

export default Grounding;
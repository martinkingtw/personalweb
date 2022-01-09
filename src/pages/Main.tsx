import React from 'react';
import WebFont from 'webfontloader';
import { Upload, Button, Input, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import '../App.css';

function Main() {
  return (
    <div className="App">
      <header className="App-header">
          Visualization of<br />
          Visual Grouding in Vision Language Transformers
      </header>
      <body className="App-body">
        <div className="vision-input">
          <Upload
            action=""
            listType="picture-card"
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
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

export default Main;
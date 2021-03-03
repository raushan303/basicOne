import React, { useState, useEffect } from 'react';
import { Wrapper } from './style';
import EditModal from '../EditModal';
import { storage } from "../../../lib/firebase";


function index() {
  const [visible, setVisible] = useState(false);


  const handleUpload = (image) => {
    if (!image) return;
    // setUploading(true);
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log("Error while uploading image!");
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log("url", url);
            // setUserImageUrl(url);
            // setUploading(false);
          });
      }
    );
  };

  return (
    <Wrapper>
      <input type='file' onChange={(image)=>{handleUpload(image.target.files[0])}}/>
      <EditModal visible={visible} setVisible={setVisible} />
      <div onClick={() => setVisible(true)} className='avatar-container'>
        <img alt='profile' src='/images/undraw6.svg' />
      </div>
      <div className='content-container'>
        <div className='bold-16 author-name' style={{ alignSelf: 'flex-start' }}>
          Raushan Kumar
        </div>
        <div className='normal-14 font-5 mt-10'>
          Marketing Leader, Author & Founder Women Leaders of Sarjapur Rd | Ex KPMG Achieving
          business outcomes through strategic marketing I Speaker
        </div>
        <div className='normal-14 font-5 mt-10' style={{ alignSelf: 'flex-start' }}>
          20 Videos 40 Question
        </div>
      </div>
    </Wrapper>
  );
}

export default index;

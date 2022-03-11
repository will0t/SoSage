import React, { useEffect, useState } from 'react';
import FullscreenModal from '../Modal/fullscreenModal';
import Button from '../Common/button';

// TODO: Work in progress
export default function AddBookModal(props) {
  const { showModal, setShowModal, setData } = props;

  const [book, setBook] = useState('');
  const [owner, setOwner] = useState('');

  useEffect(() => {}, [book]);

  const submitAddBook = () => {
    const objectToAdd = { book, owner, availability: 1 };
    setData((prevData) => {
      const newData = [...prevData];
      newData.push(objectToAdd);
      console.log('newData', newData);
      return newData;
    });
  };

  return (
    <FullscreenModal
      headerTitle="Add Book"
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div style={{ marginBottom: '1em' }}>
          <span style={{ marginRight: '1em' }}>Book:</span>
          <input
            type="text"
            placeholder="book name"
            onChange={(e) => {
              setBook(e.target.value);
            }}
          ></input>
        </div>

        <div>
          <span style={{ marginRight: '1em' }}>Owner</span>
          <input
            type="text"
            placeholder="owner name"
            onChange={(e) => {
              setOwner(e.target.value);
            }}
          ></input>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          text="Cancel"
          onClickFunction={() => {
            setShowModal(false);
          }}
        />
        <Button
          text="Submit"
          onClickFunction={() => {
            submitAddBook();
          }}
        />
      </div>
    </FullscreenModal>
  );
}

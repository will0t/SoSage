import React from 'react';

export default function Button(props) {
  const { text = 'no text provided', onClickFunction } = props;
  return (
    <button
      onClick={() => {
        onClickFunction();
      }}
    >
      {text}
    </button>
  );
}

import React from 'react';

// TODO: Work in progress
export default function FullscreenModal(props) {
  const { showModal, setShowModal } = props;
  return (
    <>
      {showModal ? (
        <div className="fullscreen-modal-background">
          <div
            className="fullscreen-modal"
            style={{ width: '50%', height: '50%' }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: 'cyan',
              }}
            >
              <span>Header</span>
              <span
                onClick={() => {
                  setShowModal(false);
                }}
              >
                X
              </span>
            </div>
            <div>Content</div>
          </div>
        </div>
      ) : null}
    </>
  );
}

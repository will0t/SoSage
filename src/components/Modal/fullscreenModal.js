import React, { useEffect } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// TODO: Work in progress
export default function FullscreenModal(props) {
  const { showModal, setShowModal, children, headerTitle } = props;

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    }
    return () => (document.body.style.overflow = 'unset');
  }, [showModal]);

  return (
    <>
      {showModal ? (
        <div className="fullscreen-modal-background">
          <div className="fullscreen-modal">
            <div className="fullscreen-modal-header">
              <span>
                <h3>{headerTitle}</h3>
              </span>
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setShowModal(false);
                }}
              >
                <FontAwesomeIcon icon={faTimes} color="black" size="lg" />
              </span>
            </div>
            <div className="fullscreen-modal-content">{children}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}

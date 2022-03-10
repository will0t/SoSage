import React from 'react';
import Head from 'next/head';
import HeaderContent from './headerContent';

/**
 * Header layout
 * @returns {JSX.Element}
 * @constructor
 */
export function Header({ title = 'SoSage', showHeaderContent = true }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://pngset.com/images/clipart-of-leave-leaf-and-sage-plant-green-flower-blossom-transparent-png-932280.png"
        />
        {/* TODO: Add metadata */}
      </Head>
      {showHeaderContent && <HeaderContent />}
    </div>
  );
}

/**
 * Body layout
 * @param {object} className
 * @param {object} children
 * @returns {JSX.Element}
 * @constructor
 */
export function Body({ className, children }) {
  return <div className={className || 'body-container'}>{children}</div>;
}

/**
 * Footer layout
 * @returns {JSX.Element}
 * @constructor
 */
export function Footer() {
  return <footer className="footer d-none">Made with &#129505; by Will</footer>;
}

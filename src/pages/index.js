import React, { useEffect, useState } from 'react';
import { Header, Body, Footer } from '../components/Layout/layout';
import BookListing from '../components/Book/bookListing';

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Body>
        <div className="body-content-container">
          <BookListing />
        </div>
      </Body>
      <Footer />
    </div>
  );
}

import React, { useMemo, useState, useEffect } from 'react';
import Table from '../Common/table';
import Button from '../Common/button';
import FullscreenModal from '../Modal/fullscreenModal';
import {
  faAngleUp,
  faAngleDown,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { api } from '../../api';

const mockData = [
  { book: 'book1', owner: 'owner1', availability: 1 },
  { book: 'book2', owner: 'owner2', availability: 0 },
  { book: 'book3', owner: 'owner3', availability: 0 },
  { book: 'book4', owner: 'owner4', availability: 1 },
  { book: 'book5', owner: 'owner1', availability: 1 },
  { book: 'book6', owner: 'owner2', availability: 0 },
  { book: 'book7', owner: 'owner3', availability: 0 },
  { book: 'book8', owner: 'owner4', availability: 1 },
  { book: 'book8', owner: 'owner1', availability: 1 },
  { book: 'book10', owner: 'owner2', availability: 0 },
  { book: 'book11', owner: 'owner3', availability: 0 },
  { book: 'book12', owner: 'owner4', availability: 1 },
  { book: 'book13', owner: 'owner1', availability: 1 },
  { book: 'book14', owner: 'owner2', availability: 0 },
  { book: 'book15', owner: 'owner3', availability: 0 },
  { book: 'book16', owner: 'owner4', availability: 1 },
  { book: 'book17', owner: 'owner1', availability: 1 },
  { book: 'book18', owner: 'owner2', availability: 0 },
  { book: 'book19', owner: 'owner3', availability: 0 },
  { book: 'book20', owner: 'owner4', availability: 1 },
  { book: 'book21', owner: 'owner1', availability: 1 },
  { book: 'book22', owner: 'owner2', availability: 0 },
  { book: 'book23', owner: 'owner3', availability: 0 },
  { book: 'book24', owner: 'owner4', availability: 1 },
  { book: 'book25', owner: 'owner1', availability: 1 },
  { book: 'book26', owner: 'owner2', availability: 0 },
  { book: 'book27', owner: 'owner3', availability: 0 },
  { book: 'book28', owner: 'owner4', availability: 1 },
  { book: 'book29', owner: 'owner1', availability: 1 },
  { book: 'book30', owner: 'owner2', availability: 0 },
  { book: 'book31', owner: 'owner3', availability: 0 },
  { book: 'book32', owner: 'owner4', availability: 1 },
];

export default function BookListing() {
  // TODO: change mockData to [] on integration with API
  const [data, setData] = useState(mockData);
  const [bookSearch, setBookSearch] = useState('');
  const [paginationComponent, setPaginationComponent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // TODO: Should add debouncing for search queries
  useEffect(() => {
    getBooks();
  }, [bookSearch]);

  const getBooks = () => {
    // TODO: API to fetch data
    const apiRes = api.book.findAll({}, {});
    // on success, setData
  };

  const updateBook = (data) => {
    // TODO: API to update book
    // on success, getBooks(), setData
  };

  const deleteBook = (bookId) => {
    // TODO: API to delete book
    // on success, getBooks(), setData
  };

  const columns = useMemo(
    () => [
      {
        Header: 'Book',
        accessor: 'book',
        Cell: ({ row: { original } }) => {
          const { book } = original;
          return book;
        },
      },
      {
        Header: 'Owner',
        accessor: 'owner',
        Cell: ({ row: { original } }) => {
          const { owner } = original;
          return owner;
        },
      },
      {
        Header: 'Availability',
        accessor: 'availability',
        Cell: ({ row: { original } }) => {
          const { availability } = original;
          return (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ flexGrow: 1 }}>
                {availability ? 'Available' : 'Unavailable'}
              </div>
              <div>
                <span className={'icon' + (availability ? '' : ' disabled')}>
                  <FontAwesomeIcon icon={faAngleUp} color="black" size="lg" />
                </span>
                <span className={'icon' + (!availability ? '' : ' disabled')}>
                  <FontAwesomeIcon icon={faAngleDown} color="black" size="lg" />
                </span>
                <span className="icon">
                  <FontAwesomeIcon icon={faTimes} color="black" size="lg" />
                </span>
              </div>
            </div>
          );
        },
      },
    ],
    [],
  );

  const paginationHandler = (pagination) => {
    setPaginationComponent(pagination);
  };

  const addBookButtonHandler = () => {
    // TODO: Open modal to add book
    setShowModal(true);
  };

  const memoData = useMemo(() => data, [data]);

  return (
    <>
      {showModal && (
        <FullscreenModal showModal={showModal} setShowModal={setShowModal} />
      )}
      {/* Mutate data to test table */}
      {/* <button
        onClick={() => {
          setData([
            { book: 'book1', owner: 'owner1', availability: 1 },
            { book: 'book2', owner: 'owner2', availability: 0 },
            { book: 'book3', owner: 'owner3', availability: 0 },
            { book: 'book4', owner: 'owner4', availability: 1 },
          ]);
        }}
      >
        Change mock data
      </button> */}
      <div className="table-search-pagination">
        <span>
          <span style={{ marginRight: '1em' }}>Book search:</span>
          <input
            type="text"
            placeholder="search book name"
            onChange={(e) => {
              setBookSearch(e.target.value);
            }}
          ></input>
        </span>
        {paginationComponent}
      </div>
      <Table
        columns={columns}
        data={memoData}
        paginationHandler={paginationHandler}
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button text="Add Book" onClickFunction={addBookButtonHandler} />
      </div>
    </>
  );
}

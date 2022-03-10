import React, { useEffect } from 'react';
import { useTable, usePagination } from 'react-table';

export default function Table(props) {
  const { columns, data, paginationHandler } = props;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 20 },
    },
    usePagination,
  );

  useEffect(() => {
    paginationHandler(paginationComponent);
  }, [pageIndex]);

  const paginationComponent = () => {
    return (
      <div>
        <button
          onClick={() => {
            previousPage();
          }}
        >
          &#8592;
        </button>
        <span style={{ margin: '0 10px' }}>
          {pageIndex + 1} of {pageCount}
        </span>
        <button
          onClick={() => {
            nextPage();
          }}
        >
          &#8594;
        </button>
      </div>
    );
  };

  return (
    <>
      {/* Displays pagination properties for debugging */}
      {/* <pre>
        <code>
          {JSON.stringify(
            {
              pageIndex,
              pageSize,
              pageCount,
              canNextPage,
              canPreviousPage,
            },
            null,
            2,
          )}
        </code>
      </pre> */}
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

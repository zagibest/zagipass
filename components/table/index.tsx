import React from "react";

interface TableProps {
  headers: string[];
  rows: any[][];
}

const Table = ({ headers, rows }: TableProps) => {
  const head = headers.map((header, index) => (
    <th scope="col" className="px-6 py-3" key={index}>
      {header}
    </th>
  ));

  const body = rows.map((row, index) => (
    <tr
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
      key={index}
    >
      {row.map((cell, index) => (
        <td className="px-6 py-4" key={index}>
          {cell}
        </td>
      ))}
    </tr>
  ));

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {head}
        </thead>
        <tbody>{body}</tbody>
      </table>
    </div>
  );
};

export default Table;

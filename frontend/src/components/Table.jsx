import { useState } from "react";
import IconDown from "../assets/icons/IconDown";

export default function Table({ data }) {
  const [sortedData, setSortedData] = useState(data);
  const [sortDirection, setSortDirection] = useState("none");
  const [searchQuery, setSearchQuery] = useState("");

  const columns = Object.keys(data[0]).filter(
    (key) => typeof data[0][key] !== "object",
  );

  const handleSort = (columnName) => {
    const newSortDirection = sortDirection === "asc" ? "desc" : "asc";
    const sorted = [...data].sort((a, b) => {
      return newSortDirection === "asc"
        ? a[columnName] - b[columnName]
        : b[columnName] - a[columnName];
    });
    setSortedData(sorted);
    setSortDirection(newSortDirection);
  };

  return (
    <div>
      <div className="">Search Bar</div>
      <div className="table-wrapper">
        <table>
          <Header
            columns={columns}
            handleSort={handleSort}
            sortDirection={sortDirection}
          />

          <Body entries={sortedData} columns={columns} />
        </table>
      </div>
    </div>
  );
}

const Header = ({ columns, handleSort, sortDirection }) => {
  const [iconDir, setIconDir] = useState("down");
  return (
    <thead>
      <tr>
        {columns.map((val, i) => (
          <th key={i}>
            <span
              className="flex justify-between"
              onClick={() => handleSort(val)}
              style={{ cursor: "pointer" }}
            >
              {val} <IconDown size={20} direction={iconDir} />
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
};

const Body = ({ entries, columns }) => {
  return (
    <tbody>
      {entries.map((entry, i) => (
        <TableRow key={i} row={entry} columns={columns} />
      ))}
    </tbody>
  );
};

const TableRow = ({ row, columns, indent = 0 }) => {
  const padding = 20 * indent + "px";
  const childKey = Object.keys(row).find((key) => Array.isArray(row[key]));
  return (
    <>
      <tr className="hover:bg-k_light_blue">
        {columns.map((column, i) => (
          <td
            style={
              i === 0
                ? {
                    paddingLeft: padding,
                    background: "rgba(28, 119, 246, 0.05)",
                  }
                : {}
            }
            key={i}
            className="border-b"
          >
            {row[column]}
          </td>
        ))}
      </tr>
      {childKey &&
        row[childKey].map((childRow, i) => (
          <tr key={i}>
            <td colSpan="100%">
              <table>
                <tbody>
                  <TableRow
                    row={childRow}
                    indent={indent + 1}
                    columns={columns}
                  />
                </tbody>
              </table>
            </td>
          </tr>
        ))}
    </>
  );
};

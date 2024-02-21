import useDataFetch from "../hooks/useDataFetch";
import { useTable } from "react-table";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Devices = () => {
  const { devicesData, isLoading } = useDataFetch();

  const navigate = useNavigate();

  const data = useMemo(() => devicesData, [devicesData]);
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Number",
        accessor: "mobile_number",
      },
      {
        Header: "Latitude",
        accessor: "latitude",
      },
      {
        Header: "Longitud",
        accessor: "longitud",
      },
      {
        Header: "Last seen",
        accessor: "last_connection",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="container">
      <button
        onClick={() => {
          navigate("/device/new");
        }}
        className="btn"
      >
        Add Device
      </button>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                onClick={() => navigate(`/devices/${row.cells[0].value}`)}
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Devices;

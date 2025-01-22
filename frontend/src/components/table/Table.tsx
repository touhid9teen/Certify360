import React from 'react';
import TableHeader, { TableHeaderProps } from './TableHeader';

interface TableProps extends TableHeaderProps {
  children: React.ReactNode;
  customTableClass?: string;
}

const Table: React.FC<TableProps> = (props: TableProps) => {
  const {
    children,
    customTableClass = '',
    tableData,
    checkBox = true,
    id,
    isChecked = false,
    handleCheckboxChange,
  } = props;

  return (
    <table className={`bg-white ${customTableClass}`}>
      <TableHeader
        tableData={tableData}
        checkBox={checkBox}
        id={id}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
      />
      <tbody>{children}</tbody>
    </table>
  );
};
export default Table;

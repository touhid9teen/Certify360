import React from 'react';
import Checkbox from '../../elements/Checkbox';
import { ForkIcon, TrashIconWithBackground } from '../../elements/Icon';

export interface TableHeaderProps {
  id: string;
  tableData: string[];
  checkBox?: boolean;
  isChecked?: boolean;
  customTableHeaderClass?: string;
  customThClass?: string;
  handleCheckboxChange?: ({ name, checked }: { name: string; checked: boolean }) => void;
  onShare?: () => void;
  onDelete?: () => void;
}

const TableHeader: React.FC<TableHeaderProps> = (props: TableHeaderProps) => {
  const {
    id,
    tableData,
    checkBox = true,
    isChecked = false,
    customTableHeaderClass = '',
    handleCheckboxChange,
    onShare,
    onDelete,
  } = props;

  return (
    <thead className={`text-xs text-[#464E5F] bg-grayish-blue`}>
      <tr>
        {checkBox && (
          <th className={`px-3 py-3.5 rounded-l-lg ${customTableHeaderClass}`}>
            <Checkbox
              customClassCheckbox="flex !w-[18px] !h-[18px]"
              name={`rows-${id}`}
              id={`rows-${id}`}
              initialChecked={isChecked}
              onChangeCheckbox={handleCheckboxChange ? handleCheckboxChange : () => {}}
            />
          </th>
        )}
        {tableData.map((item) => {
          return (
            <th
              key={item}
              className={`font-semibold text-left	pr-8 py-3 ${!checkBox ? 'pl-3' : ''} ${customTableHeaderClass}`}
            >
              {item}
            </th>
          );
        })}
        <th className={`text-left items-center w-20 rounded-r-lg ${customTableHeaderClass}`}>
          {isChecked && (
            <div className="flex flex-row justify-evenly">
              <ForkIcon className="cursor-pointer" width={27} height={27} fill={'#5630FF'} onClick={onShare} />
              <TrashIconWithBackground
                className="cursor-pointer"
                width={27}
                height={27}
                fill={'#FF4545'}
                onClick={onDelete}
              />
            </div>
          )}
        </th>
      </tr>
    </thead>
  );
};
export default TableHeader;

import React from 'react';
import { CallIcon, EmailIcon, EditIcon } from '../../elements/Icon';
import Tooltip from '../../elements/Tooltip';
import Checkbox from '../../elements/Checkbox';
import ActionButton from '../ActionButton';

interface TableRowProps {
  checkBox?: boolean;
  isChecked?: boolean;
  id: string;
  nameAndDesignation: React.ReactNode;
  email: string[];
  phoneNumber: string[];
  company: string;
  label: string;
  customTableRowClass?: string;
  customTableDataClass?: string;
  handleCheckboxChange?: () => void;
}

const TableRow: React.FC<TableRowProps> = (props: TableRowProps) => {
  const {
    checkBox = true,
    isChecked = false,
    id,
    nameAndDesignation,
    email,
    phoneNumber,
    company,
    label,
    customTableRowClass = '',
    customTableDataClass = 'py-3',
    handleCheckboxChange,
  } = props;

  const toolTipContent = (content: string[]): string => {
    return String(content.slice(1).join('\n'));
  };

  const handleEditAction = (): void => {};
  const handleDeleteAction = (): void => {};

  return (
    <tr className={`text-sm ${customTableRowClass}`}>
      {checkBox && (
        <td className={`px-3 ${customTableDataClass}`}>
          <Checkbox
            className="flex !w-[18px] !h-[18px]"
            name={`rows-${id}`}
            id={`rows-${id}`}
            initialChecked={isChecked}
            onChangeCheckbox={handleCheckboxChange ? handleCheckboxChange : () => {}}
          />
        </td>
      )}
      <td className={`pr-8 ${!checkBox ? 'pl-3' : ''} ${customTableDataClass}`}>{nameAndDesignation}</td>
      <td className={`font-semibold pr-8 ${customTableDataClass}`}>
        <div className="flex">
          {email[0]}
          {email.length > 1 && (
            <Tooltip position={'bottom'} customClass="flex pl-2" content={toolTipContent(email as string[])}>
              <EmailIcon className="cursor-pointer" width={20} height={20} fill={'#00156A'} />
            </Tooltip>
          )}
        </div>
      </td>
      <td className={`font-semibold	pr-8 ${customTableDataClass}`}>
        <div className="flex">
          {phoneNumber[0]}
          {phoneNumber.length > 1 && (
            <Tooltip position={'bottom'} customClass="flex pl-2" content={toolTipContent(phoneNumber as string[])}>
              <CallIcon className="cursor-pointer" width={20} height={20} fill={'#00156A'} />
            </Tooltip>
          )}
        </div>
      </td>
      <td className={`font-semibold pr-8 ${customTableDataClass}`}>{company}</td>
      <td className={`font-semibold pr-8 ${customTableDataClass}`}>{label}</td>
      <td className={`pl-10 pt-1 ${customTableDataClass}`}>
        <ActionButton
          options={[
            {
              icon: <EditIcon width={12} height={11} fill="#2B3674" />,
              text: 'Edit',
              onClick: handleEditAction,
            },
            {
              icon: <EditIcon width={12} height={11} fill="#2B3674" />,
              text: 'Delete',
              onClick: handleDeleteAction,
            },
          ]}
        />
      </td>
    </tr>
  );
};

export default TableRow;

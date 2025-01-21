import React,{ FC } from 'react';
import Button from '../../elements/Button';
import { CrossIcon } from '../../elements/Icon';

interface ModalHeaderProps {
  onClose: () => void;
  title?: string;
  className?: string;
}

const ModalHeader: FC<ModalHeaderProps> = (props: ModalHeaderProps) => {
  const { title = '', onClose = () => {}, className = '' } = props;
  return (
    <header className={`px-5 py-3 flex items-center ${title ? 'justify-between' : 'justify-end'}  ${className}`}>
      {title && <span className="text-lg font-bold">{title}</span>}
      <div className="flex items-center justify-center">
        <Button
          onClick={onClose}
          className="rounded-full p-3 py-1 hover:bg-gray-200"
          style={{ width: '43px', height: '43px', transition: 'background-color 0.2s' }}
        >
          <CrossIcon width="14" height="14" fill="#667085" />
        </Button>
      </div>
    </header>
  );
};
export default ModalHeader;

import React,{ FC } from 'react';
import Button from '../../elements/Button';

interface ModalFooterProps {
  primaryButtonText: string;
  onCancel: () => void;
  onSubmit: () => void;
}

const ModalFooter: FC<ModalFooterProps> = (props: ModalFooterProps) => {
  const { primaryButtonText = '', onCancel = () => {}, onSubmit = () => {} } = props;

  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full bg-white p-4 border-gray-300 rounded-b">
      <div className="flex justify-center gap-15 items-center">
        <Button onClick={onCancel} className="button-wrapper">
          <div className="w-[135px] h-[50px] px-[51px] py-[18px] bg-white rounded-lg border border-neutral-200 justify-center items-center gap-[15px] inline-flex mr-4">
            <div className="text-zinc-500 text-sm font-medium font-Metropolis">Cancel</div>
          </div>
        </Button>

        <Button onClick={onSubmit} className="button-wrapper">
          <div className="w-[147px] h-[50px] px-[51px] py-[18px] bg-indigo-600 rounded-lg justify-start items-center gap-[15px] inline-flex">
            <div className="text-white text-sm font-medium font-Metropolis">{primaryButtonText}</div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ModalFooter;

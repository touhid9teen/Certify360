import React, { FC } from 'react';

interface ModalBodyProps {
  content: string;
  imageSrc?: string;
}

const ModalBody: FC<ModalBodyProps> = (props: ModalBodyProps) => {
  const { content = '', imageSrc = '' } = props;

  return (
    <div className="flex flex-col items-center justify-center relative flex-auto p-5">
      <div className="flex flex-col items-center justify-center w-[396px] h-[200px] text-center text-neutral-900 text-xl md:text-2xl sm:text-2xl mt-20 ">
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Modal Image"
            className="mb-5 2xl:mb-5 max-h-full h-auto sm:w-auto md:w-auto lg:max-h-[200px] xl:max-h-[250px] 2xl:max-w-full mx-auto object-cover"
          />
        )}
        <div className="flex-shrink-0 mb-5 sm:mt-10 2xl:mb-3">{content}</div>
      </div>
    </div>
  );
};

export default ModalBody;

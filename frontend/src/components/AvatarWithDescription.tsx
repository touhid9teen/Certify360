import React, { FC } from 'react';

import Avatar from '../components/Aavater';

interface AvatarDescriptionProps {
  avatar: string;
  title: string;
  subTitle: string;
  customParentClass?: string;
  customTitleClass?: string;
  customSubTitleClass?: string;
}

const AvatarWithDescription: FC<AvatarDescriptionProps> = (props: AvatarDescriptionProps) => {
  const { avatar, title, subTitle, customParentClass = '', customTitleClass = '', customSubTitleClass = '' } = props;

  return (
    <div className={`flex items-center ${customParentClass}`}>
      <Avatar
        image={avatar}
        fullName={title}
        divCustomClass={avatar.length ? 'w-11 h-11 items-end' : 'w-11 h-11 items-center'}
      />

      <div className="my-1 ml-4 text-sm">
        <p className={`font-semibold text-black ${customTitleClass}`}>{title}</p>
        <p className={`text-[#9AA2B1] ${customSubTitleClass}`}>{subTitle}</p>
      </div>
    </div>
  );
};

export default AvatarWithDescription;

import Image from 'next/image';
import React, { ReactElement } from 'react';
import { logoBlock } from 'types/logo';

type LogoBlockProps = {
  logo: logoBlock
};

export const LogoBlock: React.FC<LogoBlockProps> = ({ logo }): ReactElement => {
  const { alt, link } = logo;

  return (
    <div
     >
      <a href="#">
        <Image
          alt={alt}
          height={80}
          src={link}
          width={154}
        />
      </a>
    </div>
  );
}

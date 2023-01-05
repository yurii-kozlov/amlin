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
        <img
          alt={alt}
          src={link}
    />
      </a>
    </div>
  );
}

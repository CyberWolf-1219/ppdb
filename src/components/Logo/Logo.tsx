import React from 'react';

function Logo() {
  return (
    <a href='/'>
      <picture className={''}>
        <source
          media='(min-width:320px)'
          srcSet='logo/logo@1x.png'
        />
        <source
          media='(min-width:769px)'
          srcSet='logo/logo@2x.png'
        />
        <source
          media='(min-width:1024px)'
          srcSet='logo/logo@3x.png'
        />
        <img
          src='logo/logo.png'
          alt=''
          width={150}
          height={50}
        />
      </picture>
    </a>
  );
}

export default Logo;

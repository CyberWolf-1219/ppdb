import React from 'react';

function Logo() {
  return (
    <a href='/'>
      <picture>
        <source
          media='(min-width:320px)'
          srcSet='/logo_s.png'
        />
        <source
          media='(min-width:769px)'
          srcSet='/logo_m.png'
        />
        <source
          media='(min-width:1024px)'
          srcSet='/logo_l.png  '
        />
        <img
          src='/logo.png'
          alt=''
          width={150}
          height={50}
        />
      </picture>
    </a>
  );
}

export default Logo;

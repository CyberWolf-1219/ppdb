import React from 'react';

function HeroSection() {
  return (
    <section id='hero'>
      <div className={'flex flex-row items-center justify-start gap-[2rem]'}>
        <picture>
          <source
            media='(min-width:320px)'
            srcSet='/hero_image_s.jpg'
          />
          <source
            media='(min-width:768px)'
            srcSet='/hero_image_m.jpg'
          />
          <source
            media='(min-width:1024px)'
            srcSet='/hero_image_l.jpg'
          />
          <img
            src='hero_image.jpg'
            alt=''
            width={600}
            height={600}
          />
        </picture>
        <div>
          <h1>School PastPaperDB</h1>
          <p className={'text-[1.5rem]'}>
            Sri Lanka's biggest school past paper database. Download any past
            paper you want for free. Upload the missing past papers and help
            others succeed in their education.
          </p>
          <button
            className={
              'w-fit h-fit px-[1em] py-[0.75em] bg-pallet-accent text-pallet-light font-bold'
            }>
            Upload
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

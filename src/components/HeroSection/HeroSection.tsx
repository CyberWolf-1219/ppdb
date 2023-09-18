import React, { useCallback, useState, type UIEvent } from 'react';
import Button from '../Button/Button';
import Portal from '../Portal/Portal';
import ModalBG from '../ModalBG/ModalBG';
import UploadForm from '../UploadForm/UploadForm';

function HeroSection() {
  const [showUploadForm, setShowUploadForm] = useState(false);

  const toggleUploadForm = useCallback((e: UIEvent) => {
    e.preventDefault();
    setShowUploadForm((prevState) => !prevState);
  }, []);

  return (
    <>
      {showUploadForm ? (
        <Portal>
          <ModalBG>
            <UploadForm formCloseHandler={toggleUploadForm} />
          </ModalBG>
        </Portal>
      ) : null}
      <section
        id='hero'
        className={'relative z-[0]'}>
        <div
          className={
            'flex flex-col md:flex-row items-center justify-start gap-[2rem]'
          }>
          <picture className={'relative z-[2] flex-1'}>
            <source
              media='(min-width:1024px)'
              srcSet='home_hero_image/home_hero_image@3x.png'
            />
            <source
              media='(min-width:768px)'
              srcSet='home_hero_image/home_hero_image@2x.png'
            />
            <source
              media='(min-width:320px)'
              srcSet='home_hero_image/home_hero_image@1x.png'
            />
            <img
              src='home_hero_image/home_hero_image@3x.png'
              alt=''
              width={680}
              height={680}
            />
          </picture>
          <div className={'flex-1'}>
            <h1>School PastPaperDB</h1>
            <p className={'text-[1rem]'}>
              Sri Lanka's biggest school past paper database. Download any past
              paper you want for free. Upload the missing past papers and help
              others succeed in their education.
            </p>
            <Button
              type={'primary'}
              width={'fit'}
              textSize={'md'}
              fontWeight={'bold'}
              roundness={'full'}
              action={toggleUploadForm}>
              Upload
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;

import type { UIEvent } from 'react';

interface Props {
  uploaderEmail: string;
  imageLink: string;
  downloadLink: string;
}

function SearchResultCard({ uploaderEmail, imageLink, downloadLink }: Props) {
  return (
    <article
      className={
        'w-full h-fit shadow-md shadow-black/30 bg-pallet-light rounded-[0.25rem] overflow-hidden'
      }>
      <img
        src={imageLink}
        alt='Exam paper preview image'
        className={
          'aspect-[3/3.5] w-full h-auto object-cover bg-black/20 text-center'
        }
      />
      <div className={'w-full h-fit'}>
        <p
          className={
            'mt-[1rem] text-base font-bold text-center text-pallet-dark'
          }>
          {uploaderEmail}
        </p>

        <a
          href={downloadLink}
          target='_blank'
          rel='noopener noreferrer'
          className={
            'inline-block w-full h-fit px-[1rem] py-[1rem] font-bold bg-pallet-accent text-white text-center leading-[100%]'
          }>
          DOWNLOAD
        </a>
      </div>
    </article>
  );
}

export default SearchResultCard;

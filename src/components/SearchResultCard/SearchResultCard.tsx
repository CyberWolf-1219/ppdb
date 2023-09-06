import Button from '../Button/Button';

interface Props {
  imageLink: string;
  downloadLink: string;
}

function SearchResultCard({ imageLink, downloadLink }: Props) {
  return (
    <article
      className={
        'w-full h-fit shadow-md shadow-black/30 bg-pallet-light rounded-sm overflow-hidden'
      }>
      <img
        src={imageLink}
        alt='Exam paper preview image'
        className={
          'aspect-[3/3.5] w-full h-auto object-contain bg-black/20 text-center'
        }
      />
      <div className={'w-full h-fit'}>
        <p
          className={
            'mt-[1rem] text-base font-bold text-center text-pallet-dark'
          }>
          Year/Exam/Subject
        </p>
        <Button
          type={'primary'}
          width={'full'}
          height={'fit'}
          textSize={'md'}
          action={() => {}}>
          Download
        </Button>
      </div>
    </article>
  );
}

export default SearchResultCard;

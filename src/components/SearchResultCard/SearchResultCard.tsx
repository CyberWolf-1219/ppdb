import Button from '../Button/Button';

interface Props {
  imageLink: string;
  downloadLink: string;
}

function SearchResultCard({ imageLink, downloadLink }: Props) {
  return (
    <article className={'aspect-[3/4] w-full h-auto shadow-md shadow-black/30'}>
      <img
        src={imageLink}
        alt=''
        width='320'
        height='400'
      />
      <div className={'w-full h-fit'}>
        <p className={'mt-[1rem] text-xl font-bold text-center'}>
          Year/Exam/Subject
        </p>
        <Button
          type={'primary'}
          width={'full'}
          action={() => {}}>
          Download
        </Button>
      </div>
    </article>
  );
}

export default SearchResultCard;

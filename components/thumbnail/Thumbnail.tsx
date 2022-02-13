import Image from 'next/image';
import { Photo } from 'types';

interface Props {
  photo: Photo;
}

const Thumbnail: React.FC<Props> = (props) => {
  return (
    <div className="w-full justify-start p-1 md:p-2">
      <Image
        width={props.photo.width}
        height={props.photo.height}
        src={props.photo.src.large2x}
        alt={props.photo.photographer}
        blurDataURL={props.photo.src.tiny}
        className="block h-full w-full rounded-lg object-cover object-center"
      />
      <div className="w-full flex-col flex items-start text-lg">
        <p>{props.photo.photographer}</p>
        <a href={props.photo.photographer_url}>
          Photographer URL
        </a>
      </div>
    </div>
  );
};

export default Thumbnail;

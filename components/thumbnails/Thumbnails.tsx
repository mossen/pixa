import { Photo } from 'types';
import Thumbnail from '@components/thumbnail/Thumbnail';

interface Props {
  photos: Photo[];
}

const Thumbnails: React.FC<Props> = (props) => {
  if (!props.photos.length) {
    return null;
  }

  const firstHalf = props.photos.slice(0, props.photos.length / 2);
  const secondHalf = props.photos.slice(props.photos.length / 2);

  return (
    <section className="overflow-hidden text-gray-700">
      <div className="mx-auto px-5 py-2 lg:px-32 lg:pt-4">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-full flex-wrap md:w-1/2">
            {firstHalf.map((photo: Photo, index: number) => {
              return <Thumbnail key={index} photo={photo} />;
            })}
          </div>
          <div className="flex w-full flex-wrap md:w-1/2">
            {secondHalf.map((photo: Photo, index: number) => {
              return <Thumbnail key={index} photo={photo} />;
            })}
          </div>
        </div>
      </div>
    </section>
  ) 
};

export default Thumbnails;

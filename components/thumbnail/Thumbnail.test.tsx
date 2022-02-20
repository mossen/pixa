import * as React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Thumbnail from './Thumbnail';
import { Photo } from 'types';

const photo: Photo = {
  alt: 'Close-up of Beer Glass Against Black Background',
  avg_color: '#171617',
  height: 4305,
  id: 255483,
  liked: false,
  photographer: 'Pixabay',
  photographer_id: 2659,
  photographer_url: 'https://www.pexels.com/@pixabay',
  src: {
    original:
      'https://images.pexels.com/photos/255483/pexels-photo-255483.jpeg',
    large2x:
      'https://images.pexels.com/photos/255483/pexels-photo-255483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    large:
      'https://images.pexels.com/photos/255483/pexels-photo-255483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    medium:
      'https://images.pexels.com/photos/255483/pexels-photo-255483.jpeg?auto=compress&cs=tinysrgb&h=350',
    small:
      'https://images.pexels.com/photos/255483/pexels-photo-255483.jpeg?auto=compress&cs=tinysrgb&h=130',
    portrait:
      'https://images.pexels.com/photos/255483/pexels-photo-255483.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    landscape:
      'https://images.pexels.com/photos/255483/pexels-photo-255483.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tiny: 'https://images.pexels.com/photos/255483/pexels-photo-255483.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  },
  url: 'https://www.pexels.com/photo/close-up-of-beer-glass-against-black-background-255483/',
  width: 3229,
};

test('renders Thumbnail component', async () => {
  const { getByText, getByRole } = render(<Thumbnail photo={photo} />);

  expect(getByText('Photographer URL')).toBeInTheDocument();
  expect(getByText(photo.photographer)).toBeInTheDocument();
  expect(getByRole('img')).toBeInTheDocument();
});

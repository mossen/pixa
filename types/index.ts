export interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  alt: string;
  avg_color: string;
  photographer: string;
  photographer_url: string;
  photographer_id: string | number;
  liked: boolean;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
}

interface PaginationObject {
  url?: string;
  page: number;
  per_page: number;
  next_page: number;
  total_results: number;
}

export type Photos = PaginationObject & { photos: Photo[] };
import { Media } from './media';

export interface Post {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  title: string;
  description?: string;
  slug?: string;
  url?: string;
  external: boolean;
  order?: number;
  version?: "Heri" | "Kari" | "Bono" | "Gino";
  picture?: Media | null;
  content?: any;
};

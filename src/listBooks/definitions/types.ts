export type Authors = {
  key: string;
  name: string;
};

export interface BookItem {
  title: string;
  cover_edition_key: string;
  authors: Authors[];
}

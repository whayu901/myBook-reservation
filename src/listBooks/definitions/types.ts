export type Authors = {
  key: string;
  name: string;
};

export type FormDataReservation = {
  name?: string;
  date?: any;
  time?: any;
};

export interface BookItem {
  title: string;
  cover_edition_key: string;
  authors: Authors[];
}

import {
  BookItem,
  FormDataReservation,
} from '../../listBooks/definitions/types';

export interface DataReservedBook extends FormDataReservation {
  listBooks: BookItem[];
}

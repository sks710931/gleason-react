import { months} from '../mocks/months';

export const parseDate = (datetoParse: Date) => {
  let dateString = '';
  const date = datetoParse.toString().split('T').slice(0, 1)[0].split('-');

  dateString =
    date[2] + ' ' + months[parseInt(date[1]) - 1] + ', ' + date[0];
  return dateString;
};
import { isBoolean } from 'util';

export function convertBoolean(value: any): boolean {
  if (isBoolean(value)) {
    return value;
  }
  return String(value).toLocaleLowerCase() === 'true';
}

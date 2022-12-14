import { docImageFilter } from './filters.utils';
import { unlink, existsSync } from 'fs';

export const cleaner = path => {
  if (existsSync('uploads/' + path)) {
    unlink('uploads/' + path, err => {
      if (err) {
        console.error(err);
        return;
      }
    });
    const webpPath = path.replace(docImageFilter, '.webp');
    if (existsSync('uploads/' + webpPath)) {
      unlink('uploads/' + webpPath, err => {
        if (err) {
          console.error(err);
          return;
        }
      });
    }
  }
};

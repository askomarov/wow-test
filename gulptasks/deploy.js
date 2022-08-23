import path from 'path';
import ghPages from 'gh-pages';
// gh-pages
export const deploy = (cb) => {
  return ghPages.publish(path.join(process.cwd(), './dist'), cb);
}

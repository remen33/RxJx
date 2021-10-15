import { forkJoin, catchError, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const GITHUB_API_URL = 'https:api.github.com/users';
const GITHUB_USER = 'remen33';

forkJoin({
  users: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
  repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos23423`),
  gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`),
})
  .pipe(catchError((error) => of(error)))

  .subscribe(console.log);

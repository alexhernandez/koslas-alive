// FILTERS
//

import moment from 'moment';

export function day (data) {
  return moment(data).fromNow();
}

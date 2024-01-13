import axios from 'axios'

import { reportError } from '@/common/helpers/error'

export const fetcher = (url: string) =>
  axios
    .get(url)
    .then(response => response.data)
    .catch(error => reportError({ error, service: url }))

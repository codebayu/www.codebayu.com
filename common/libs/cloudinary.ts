const BASE_URL = 'https://res.cloudinary.com/codebayu/image/upload/f_auto,q_auto/v1/codebayu'

export function getCloudinaryUrl(path: string) {
  return BASE_URL + path
}

export const getImage = async () => {
  const API_KEY = 'ACfNj5a5Eb6pbSaNyHvxQTXQRJcxp3cl'
  const URL = `https://api.giphy.com/v2/emoji?api_key=${API_KEY}&limit=10&offset}=0`

  try {
    const response = await fetch(URL)
    const { data } = await response.json()
    const { url } = data.images.hd.mp4
    return url
  } catch (error) {
    console.error(error)
    return 'found not image'
  }
}

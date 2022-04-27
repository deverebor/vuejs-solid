export default async (url: string) => {
  const baseUrl = 'https://jsonplaceholder.typicode.com/'

  const response = await fetch(`${baseUrl}${url}`)
  return await response.json()
}

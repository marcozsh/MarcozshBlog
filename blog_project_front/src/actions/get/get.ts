const fetcher = (id: string) => fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/${id}`).then((res) => res.json())

const get = () => fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/`).then((res) => res.json())
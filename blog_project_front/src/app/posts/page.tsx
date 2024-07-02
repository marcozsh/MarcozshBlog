import CustomCard from "@/components/cards";
import { PostModel } from "@/types/post";

const get = () => fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/`).then((res) => res.json())


export default async function PostPage() {

    const data = await get()
    console.log(data)
    if (!data) {
        return (
            <div>No hay blogs</div>
        )
    }
    return (
        <section className="grid min-h-screen p-8 place-items-center">
            <header>
                <h1>Marcozsh&apos;s Blog</h1>
            </header>
            <div className="grid grid-cols-1 gap-4">
                <h2>Posts</h2>
                {data?.map((post: PostModel) => (
                    <CustomCard
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        content={post.content}
                        author={post.author}
                        created_at={post.created_at}
                    />
                ))}
            </div>
        </section>
    );
}
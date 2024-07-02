import CustomCard from "@/components/cards";
import { notFound } from "next/navigation";
type PostIdPageProps = {
    params: { id: string }
}
const fetcher = (id: string) => fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/${id}`).then((res) => res.json())

export default async function PostIDPage({ params }: PostIdPageProps) {
    const data = await fetcher(params.id)
    if (data.detail) {
        notFound()
    }
    return (
        <section className="flex flex-col min-h-screen place-items-center">
            <header className="h-10">
                <h1>Marcozsh&apos;s Blog</h1>
            </header>
            <div className="grid grid-cols-1 gap-4">
                <h2>Blog</h2>
                <CustomCard id={data.id} title={data.title} content={data.content} author={data.author} created_at={data.created_at} />
            </div>
        </section>

    );
}
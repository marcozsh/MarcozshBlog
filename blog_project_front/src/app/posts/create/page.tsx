import PostsForm from "@/components/form/form";



export default function CreatePostPage() {
  return (
    <section className="flex flex-col min-h-screen">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center">
          <PostsForm />
        </div>
      </div>
    </section>

  );
}
'use client'
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Button, Input, Textarea } from "@nextui-org/react";
import { postData } from "@/actions/post";
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from "next/navigation";
import { postSchema } from "./form_validations";

export type Inputs = {
    title: string,
    content: string,
    author: string,
};

export default function PostsForm() {
    const { control, register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({resolver:zodResolver(postSchema)});

    const router = useRouter()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try{
            const returnData = await postData(data)
            router.push(`/posts/${returnData.id}`)
        }catch{}
        
    }
    
    return (
        <section className="flex flex-col px-40 gap-7">
            <h1>
                Ingresar un post
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <Controller
                    control={control}
                    name="title"
                    render={({ field }) => (
                        <Input
                            label="Titutlo"
                            //color="primary"
                            //autoComplete="email"
                            //startContent={<FiUser />}
                            isInvalid={!!errors?.title}
                            errorMessage={errors.title?.message}
                            {...field}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="author"
                    render={({ field }) => (
                        <Input
                            label="Autor"
                            //color="primary"
                            //autoComplete="email"
                            //startContent={<FiUser />}
                            isInvalid={!!errors?.author}
                            errorMessage={errors.author?.message}
                            {...field}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="content"
                    render={({ field }) => (
                        <Textarea
                            label="Contenido"
                            //color="primary"
                            //autoComplete="email"
                            //startContent={<FiUser />}
                            isInvalid={!!errors?.content}
                            errorMessage={errors.content?.message}
                            {...field}
                        />
                    )}
                />
                <Button
                    type="submit"
                    className="w-full rounded-xl"
                    color="primary"
                >
                    Ingresar
                </Button>
            </form>
        </section>
    );
}
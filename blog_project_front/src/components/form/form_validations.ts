import { z } from 'zod'

export const postSchema = z.object({
    title: z
        .string()
        .trim()
        .min(3, {
            message: 'El titulo debe tener al menos 3 caracteres',
        })
        .max(200, {
            message: 'El titulo debe tener menos de 200 caracteres',
        }),
    content: z
        .string()
        .trim()
        .min(3, {
            message: 'El contenido debe tener al menos 3 caracteres',
        })
        .max(1000, {
            message: 'El contenido debe tener menos de 1000 caracteres',
        }),
    author: z
        .string()
        .trim()
        .min(3, {
            message: 'El autor debe tener al menos 3 caracteres',
        }).max(100, "El autor no puede tener más de 200 caracteres"),
})
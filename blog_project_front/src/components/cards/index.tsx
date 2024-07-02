'use client';
import { PostModel } from "@/types/post";
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import Link from 'next/link'

import dayjs from 'dayjs'
export const formatFullDate = (date: string) =>
    dayjs(date).format('DD/MM/YYYY HH:mm [hrs]')
type CustomCardProps = {} & PostModel

export default function CustomCard({ id, title, content, author, created_at }: CustomCardProps) {
    return (
        <Link href={`/posts/${id}`}>
            <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                    <div className="flex flex-col">
                        <p className="text-md">{title}</p>
                        <p className="text-small text-default-500">creado por {author}</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>{content}</p>
                </CardBody>
                <Divider />
                <CardFooter>
                    <div className="flex flex-col">
                        <p> Creado el {formatFullDate(created_at)}</p>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
}
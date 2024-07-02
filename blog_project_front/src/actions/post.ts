import { Inputs } from "@/components/form/form"


export const postData = (data: Inputs) => {
    let requestsOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
        , body: JSON.stringify(data)
    }
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}api/post/`, requestsOptions).then(res => {
        if (res.ok) return res.json()
        return null
    }).catch(res => {
        console.log(res)
    }
    )
}


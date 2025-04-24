'use client'
import { useRouter } from 'next/navigation'

export default function Card({html, id}) {
    const router = useRouter()
    const markup = { __html: html}
    return (
        <div dangerouslySetInnerHTML={markup} className="p-2 h-[215px] w-[150px]" onClick={() => router.push(`/card/${id}`)}></div>
    )
}


/*async function retrieveCard(id) {
    const data = await fetch("https://api.gwent.one/?key=data&id="+ id.toString() + "&response=html&html=info&class=rounded")
    const result = await data.text()
    return result
}*/
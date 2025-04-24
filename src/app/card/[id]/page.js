import DetailCard from "@/components/detailCard"

export default async function Page({ params }) {
    const { id } = await params
    return (
        <div>
            <DetailCard id={id}></DetailCard>
        </div>
    )
}
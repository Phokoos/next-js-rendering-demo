export const dynamicParams = false;

export async function generateStaticParams() {
    return [
        {id: '1'},
        {id: '2'},
        {id: '3'},
    ]
}

export default async function ProductDetailPage({params}) {
    const {id} = await params;

    return (
        <>
            <h2>Product Detail Page - {id}</h2>
            <p>{new Date().toLocaleTimeString()}</p>
        </>
    )
}
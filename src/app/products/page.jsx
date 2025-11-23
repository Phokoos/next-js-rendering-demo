import Link from "next/link";

export default function ProductsPage() {
    return (
        <>
            <h2>Products page</h2>
            <Link href={'/products/1'}>Go to product 1</Link>
            <Link href={'/products/2'}>Go to product 2</Link>
            <Link href={'/products/3'}>Go to product 3</Link>
        </>
    )
}

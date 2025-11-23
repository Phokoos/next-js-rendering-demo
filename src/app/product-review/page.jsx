import {Product} from "@/components/product";
import {Reviews} from "@/components/reviews";
import {Suspense} from "react";

export default function ProductReviewsPage() {
    return (
        <>
            <h1>Product Review</h1>

            <Suspense fallback={<p>Loading product...</p>}>
                <Product/>
            </Suspense>
            <Suspense fallback={<p>Loading reviews...</p>}>x
                <Reviews/>
            </Suspense>
        </>
    )
}
import {cookies} from "next/headers";

export default async function AboutPage() {
    const cookieStore = await cookies();
    const theme = cookieStore.get('theme');
    console.log(theme);


    return (
        <div className="container mx-auto my-10">
            <h1 className="text-center text-3xl font-bold my-4">About This Site {new Date().toLocaleTimeString()}</h1>
            <p className="text-center">
                This site showcases the New Wonders of the World through a curated photo feed. Explore stunning images and learn more about each wonder by clicking on the photos.
            </p>
        </div>
    )
}
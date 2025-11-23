import {serverSideFunction} from "@/utils/server-utils";
import ImageSlider from "@/app/client-route/page";

export default function ServerRoutePage() {
    const result = serverSideFunction();
    console.log(result);

    return <>
        <h1>Server Route Page</h1>

        <ImageSlider/>
    </>
}
import Form from "@/app/farmer/catalog/components/Form";
import {findCatalogById} from "@/app/service/catalogService";
import {cookies} from "next/headers";

const Page = async ({params}) => {
    let tokenStr = cookies().get("token")?.value;
    const catalogResponse = await findCatalogById(params.id, tokenStr)

    return <Form catalogInfo={catalogResponse.data}/>
}

export default Page
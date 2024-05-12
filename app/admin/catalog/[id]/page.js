import Form from "@/app/farmer/catalog/components/Form";
import {findAllCatalogs, findCatalogById} from "@/app/service/catalogService";

const Page = async ({params}) => {
    const catalogResponse = await findCatalogById(params.id)

    return <Form catalogInfo={catalogResponse.data}/>
}

export default Page
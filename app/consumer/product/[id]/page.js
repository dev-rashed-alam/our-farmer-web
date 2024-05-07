import Header from "@/app/consumer/components/header";
import Footer from "@/app/consumer/components/footer";
import NotFound from "@/app/consumer/components/404";
export default function Page({params}) {
    const  {id} = params;
    //write a json list of products and filter the product by  params id
    const products = [
        {
            id: 1,
            name: "Product 1",
            price: 100
        },
        {
            id: 2,
            name: "Product 2",
            price: 200
        },
        {
            id: 3,
            name: "Product 3",
            price: 300
        }
    ];

    const product = products.find(product => product.id == id);

    return (
        <main>
            <Header />
            {
                product ? (
                    <div>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                ) : (
                   <NotFound />
                )
            }
            <Footer />
        </main>
    );
}

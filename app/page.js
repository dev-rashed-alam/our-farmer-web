import React, {Suspense} from "react";
import HomePage from "@/app/consumer/components/home";

export default function Home() {
    return (
        <Suspense>
            <main>
                <HomePage/>
            </main>
        </Suspense>
    );
}

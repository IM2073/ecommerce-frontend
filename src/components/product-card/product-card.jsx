import Link from "next/link";
import capitalizeFirstLetter from "@/utils/capitalize";
import convertDollar from "@/utils/format-currency";

export default function ProductCard({ product }) {
    return (
        <div>
            <Link href={`/product/${product?.id}`}>
                <div className="w-[18rem] h-[18rem] border-none rounded-lg bg-[#F2F2F2] flex justify-center items-center p-5">
                    <img
                        src={product?.imageUrl}
                        className="rounded-t-lg w-[100%] h-[100%] object-contain"
                        alt="Product Picture"
                    />
                </div>
            </Link>
            <div>
                <h1 className="text-lg font-bold mt-3">
                    {capitalizeFirstLetter(product?.name)}
                </h1>
                <div className="flex justify-between">
                    <p className="text-[#6c6c6c]">Stock: {product?.stock}</p>
                    <p className="font-medium text-lg">
                        {convertDollar.format(product?.price)}
                    </p>
                </div>
            </div>
        </div>
    );
}

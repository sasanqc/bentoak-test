import { Pagination } from "@/app/components";
import ProductList from "./list";
import createQueryString from "@/app/utils/createQueryString";
import getProducts from "@/app/services/product";

interface Props {
  searchParams: { q: string; page: string };
}

const PGAE_SIZE = 10;

const Products = async ({ searchParams }: Props) => {
  const page = parseInt(searchParams.page) || 1;
  const queryStr = createQueryString({
    q: searchParams.q || "",
    limit: PGAE_SIZE,
    skip: (page - 1) * PGAE_SIZE,
  });
  let data = { products: [], total: "0", skip: "0", limit: PGAE_SIZE };
  try {
    data = await getProducts(queryStr);
  } catch (error) {
    console.log("Failed to get data");
  }

  return (
    <div className="p-8 ">
      <ProductList list={data.products} />
      <Pagination
        pageSize={PGAE_SIZE}
        currentPage={page}
        itemCount={parseInt(data.total)}
      />
    </div>
  );
};

export default Products;

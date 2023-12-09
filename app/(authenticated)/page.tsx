import Pagination from "../components/Pagination";
interface Props {
  searchParams: { page: string };
}
export default function Home({ searchParams }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Pagination
        itemCount={100}
        pageSize={10}
        currentPage={parseInt(searchParams.page) || 1}
      />
    </main>
  );
}

import { DataTable } from "@/components/table/DataTable";
import { summaryColumns } from "@/components/table/SummaryColumns";
import { selectSummary, useGetSummaryQuery } from "@/redux/api/borrowApi";
import Loading from "./Loading";

const BorrowSummery = () => {
  const { data, isLoading } = useGetSummaryQuery();

  if (isLoading) return <Loading />;
  const summary = selectSummary(data);

  return (
    <main>
      <div className="inner-container py-14 lg:py-28">
        <DataTable columns={summaryColumns} data={summary} />
      </div>
    </main>
  );
};

export default BorrowSummery;

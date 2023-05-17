import Card from "../../../components/Card";

export default function InvoiceDetailsLoading() {
  return (
    <>
      <Card className="h-20 mb-6 animate-pulse" />
      <Card className="!p-12 h-[596px]  animate-pulse">
        <div className="h-[250px] "></div>
        <div className="bg-[#F9FAFE] dark:bg-purple-500 rounded-t-lg  h-[200px] " />
        <div className="bg-[#373B53] bg-opacity-25 dark:bg-purple-800 rounded-b-lg h-[75px] "></div>
      </Card>
    </>
  );
}

import Button from "./components/Button";
import { MyItem, MySelect } from "./components/Select";
import { useAllInvoicesQuery } from "./generated/graphql";

function App() {
  const { data } = useAllInvoicesQuery();
  console.log(data);
  return (
    <main className="p-24">
      hello, world!
      <MySelect
        defaultSelectedKey="react-aria-1"
        onSelectionChange={(key) => console.log(key)}
        label="Ice cream flavor"
      >
        <MyItem>Chocolate</MyItem>
        <MyItem>Mint</MyItem>
        <MyItem>Strawberry</MyItem>
        <MyItem>Vanilla</MyItem>
      </MySelect>
      <Button variant="destructive">Mark as Paid</Button>
    </main>
  );
}

export default App;

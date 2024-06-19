import { Table } from "antd";
import { useCrypto } from "../contex/crypto-contex";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    showSorterTooltip: {
      target: "full-header",
    },
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Price, $",
    dataIndex: "price",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.amount - b.amount,
  },
];


export default function AssetsTable() {
  const { assets } = useCrypto();

  const data = assets.map(a => ({
    key: a.id,
    name: a.name,
    price: a.price,
    amount: a.amount,
  }))

  return (
    <Table
      pagination={false}
      columns={columns}
      dataSource={data}
    />
  );
}

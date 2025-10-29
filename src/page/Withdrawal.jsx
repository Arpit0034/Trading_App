import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const initialWatchList = [
  {
    id: 1,
    date: "October 27, 2026 at 12:12",
    method: "Bank Account",
    amount: "₹78",
    status: "SUCCESS",
  },
  {
    id: 2,
    date: "October 27, 2026 at 12:12",
    method: "Bank Account",
    amount: "₹78",
    status: "SUCCESS",
  },
  {
    id: 3,
    date: "October 27, 2026 at 12:12",
    method: "Bank Account",
    amount: "₹78",
    status: "SUCCESS",
  },
  {
    id: 4,
    date: "October 27, 2026 at 12:12",
    method: "Bank Account",
    amount: "₹78",
    status: "SUCCESS",
  },
  {
    id: 5,
    date: "October 27, 2026 at 12:12",
    method: "Bank Account",
    amount: "₹78",
    status: "SUCCESS",
  },
];

const Withdrawal = () => {
  return (
    <div className="p-2 lg:p-12">
      <h1 className="font-bold text-2xl pl-4 pb-5">Withdrawal</h1>
      <Table className="border-b-2">
        <TableHeader>
          <TableRow className="border-t-2">
            <TableHead className="text-left py-4">Date</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className={"text-left"}>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {initialWatchList.map((item) => (
            <TableRow key={item.id} >
              <TableCell className={"py-4"}>
                <div className="flex flex-col gap-1">
                  <p className="text-gray-300 font-lg font-mono leading-relaxed">{item.date}</p>
                </div>
              </TableCell>
              <TableCell className={"font-lg font-mono"}>{item.method}</TableCell>
              <TableCell className={"font-lg font-mono"}>{item.amount}</TableCell>
              <TableCell className={"text-green-600 font-semibold font-lg" }>{item.status}</TableCell>
            </TableRow>
          ))}
          {initialWatchList.length === 0 && (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-8">
                No items in your withdrawal list.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default Withdrawal
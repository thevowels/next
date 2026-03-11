import { DataTable } from "./data-table";
import { columns } from "./columns";
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "3u1reuv4",
    amount: 316,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 242,
    status: "success",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 837,
    status: "processing",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 874,
    status: "success",
    email: "carmella@hotmail.com",
  },
  {
    id: "6ghm0dkx",
    amount: 721,
    status: "failed",
    email: "Itzel34@yahoo.com",
  },
  {
    id: "m5gr84i9",
    amount: 645,
    status: "pending",
    email: "hudson.elliott@yahoo.com",
  },
  {
    id: "7k2l9q3w",
    amount: 892,
    status: "success",
    email: "sarah.wilson@gmail.com",
  },
  {
    id: "x8n4p1z5",
    amount: 156,
    status: "processing",
    email: "mike.johnson@hotmail.com",
  },
  {
    id: "q9w2e8r7",
    amount: 423,
    status: "failed",
    email: "jenny.brown@yahoo.com",
  },
  {
    id: "t4y6u2i0",
    amount: 678,
    status: "pending",
    email: "david.smith@gmail.com",
  },
  {
    id: "p3o9i8u7",
    amount: 912,
    status: "success",
    email: "lisa.davis@hotmail.com",
  },
  {
    id: "a5s7d9f1",
    amount: 234,
    status: "processing",
    email: "robert.white@yahoo.com",
  },
  {
    id: "z1x2c3v4",
    amount: 567,
    status: "failed",
    email: "emma.garcia@gmail.com",
  },
  {
    id: "b6n8m4k2",
    amount: 345,
    status: "pending",
    email: "alex.martinez@gmail.com",
  },
  {
    id: "h7j9l3q5",
    amount: 789,
    status: "success",
    email: "melissa.taylor@hotmail.com",
  },
  {
    id: "f2d4g6h8",
    amount: 156,
    status: "processing",
    email: "chris.anderson@yahoo.com",
  },
  {
    id: "r9t1y3u5",
    amount: 623,
    status: "failed",
    email: "amanda.thomas@gmail.com",
  },
  {
    id: "w8e6r4t2",
    amount: 445,
    status: "success",
    email: "kevin.jackson@hotmail.com",
  },
  {
    id: "s3a5d7f9",
    amount: 298,
    status: "pending",
    email: "nicole.harris@yahoo.com",
  },
  {
    id: "g1h3j5k7",
    amount: 712,
    status: "processing",
    email: "brandon.clark@gmail.com",
  },
  {
    id: "v4c6x8z0",
    amount: 834,
    status: "success",
    email: "stephanie.lewis@hotmail.com",
  },
  {
    id: "n2b4v6c8",
    amount: 189,
    status: "failed",
    email: "jason.robinson@yahoo.com",
  },
  {
    id: "l9k7j5h3",
    amount: 567,
    status: "pending",
    email: "rachel.walker@gmail.com",
  },
  {
    id: "p0o8i6u4",
    amount: 723,
    status: "processing",
    email: "tyler.hall@hotmail.com",
  },
  {
    id: "q5w7e9r1",
    amount: 456,
    status: "success",
    email: "christina.allen@yahoo.com",
  },
  {
    id: "m3n5b7v9",
    amount: 612,
    status: "failed",
    email: "daniel.young@gmail.com",
  },
  {
    id: "x4z6c8v0",
    amount: 378,
    status: "pending",
    email: "jessica.king@hotmail.com",
  },
  {
    id: "k1l3p5o7",
    amount: 845,
    status: "processing",
    email: "matthew.wright@yahoo.com",
  },
  {
    id: "i9u7y5t3",
    amount: 234,
    status: "success",
    email: "ashley.lopez@gmail.com",
  },
  {
    id: "e2r4t6y8",
    amount: 689,
    status: "failed",
    email: "joshua.hill@hotmail.com",
  },
  {
    id: "d1f3g5h7",
    amount: 523,
    status: "pending",
    email: "megan.scott@yahoo.com",
  },
  {
    id: "c8x0z2v4",
    amount: 756,
    status: "processing",
    email: "andrew.green@gmail.com",
  },
  {
    id: "b6n8m0k2",
    amount: 401,
    status: "success",
    email: "samantha.adams@hotmail.com",
  },
];

const getData = async (): Promise<Payment[]> => {
  return payments;
};
export default async function PaymentsPage() {
  const data = await getData();

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

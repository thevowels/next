
type Column = {
	header: string;
	accessor: string;
	className?: string;
}
type Teacher = {
	id: number;
	teacherId: string;
	name: string;
	email?: string;
	photo: string;
	phone: string;
	subjects: string[];
	classes: string[];
	address: string;
}
export default function Table ({columns, renderRow, data}: {columns:Column[],renderRow: (item:Teacher) => React.ReactNode, data: Teacher[] }) {
	return (
		<table className="w-full mt-4">
			<thead>
				<tr className="text-left text-gray-500 text-sm">
					{columns.map(col =>(
						<th key={col.accessor} className={col.className}>{col.header}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map(item => renderRow(item))}
			</tbody>
		</table>
	)
}
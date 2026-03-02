'use client'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {User} from "@/lib/models/User";

const columns: GridColDef<User>[] = [
    {
        field: '_id',
        headerName: 'ID',
        // width: 90
    },
    {
        field: 'name',
        headerName: 'Name',
        // width: 150,
        editable: true,
    },
    {
        field: 'email',
        headerName: 'Email',
        // width: 180,
    },
    {
        field: 'role',
        headerName: 'User Role',
        // width: 110,
    },
    {
        field: 'status',
        headerName: 'User Status',
        type: 'string',
        // width: 110,
    },
    {
        field: 'createdAt',
        headerName: 'Created At',
        valueFormatter: (value: string) => {
            if (!value) return '';
            return new Date(value).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            });
        },
        // width: 120
    },
];


export default function UserDataGrid({users}:{users:User[]}) {

    return (
        <Box sx={{ height: 'full',flex: 1, mx: 'auto'}}>
            <DataGrid
                rows={users}
                key={users.length}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                getRowId={row => row._id}
                pageSizeOptions={[5,10,30]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnResize={true}
                autosizeOnMount={true}
            />
        </Box>
    );
}

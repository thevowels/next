'use client'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {User} from "@/lib/models/User";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';
const columns: GridColDef<User>[] = [
    {
        field: '_id',
        headerName: 'ID',
        width: 90
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
    {
        field: 'action',
        headerName: 'Action',
        // width: 120,
        sortable: false,
        filterable: false,
        headerAlign: 'center',
        align: 'center',
        renderCell: (param) => {
            return (
               <Stack direction={"row"} spacing={1} mt={1}>
                    <Button
                        component={Link}
                        variant={"contained"}
                        href={`/users/${param.row._id}`}
                        size={"small"}
                        >
                        Show
                    </Button>
                   <IconButton
                       size={"small"}
                       color={"primary"}
               >
                       <EditIcon fontSize={"small"}/>
                   </IconButton>
                   <IconButton
                       size={"small"}
                       color={"error"}
                       >
                       <DeleteIcon fontSize={"small"}/>
                   </IconButton>
               </Stack>
           )
        }
    }
];


export default function UserDataGrid({users}:{users:User[]}) {

    if(!users.length)
        return (
            <div>
                No Users Found
            </div>
        )
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

'use client'

import {UserStatus} from "@/lib/models/User";
import Chip from '@mui/material/Chip';

export default function StatusChip({status}: {status: UserStatus}) {
    if(status == "active")
        return (
            <Chip label={status} color="primary" />
        )
    if(status == "inactive")
        return (
            <Chip label={status} />
        )
    if(status == "pending")
        return (
            <Chip label={status} color="warning" />
        )
}
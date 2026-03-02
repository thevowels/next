'use client'

import {User} from "@/lib/models/User";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import StatusChip from "@/app/(dashboard)/components/StatusChip";

export default function UserCard({user}: {user: User}) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://dummyjson.com/icon/abc123/150"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {user.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {user.email}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {user.role}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        <StatusChip status={user.status}/>
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {user.createdAt}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    )
}
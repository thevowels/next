import { User} from "../models/User";

export const mockUsers: User[] = [
    {
        _id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'admin',
        status: 'active',
        createdAt: '2026-01-15T10:00:00Z',
    },
    {
        _id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'editor',
        status: 'active',
        createdAt: '2026-02-01T14:30:00Z',
    },
    {
        _id: '3',
        name: 'Bob Wilson',
        email: 'bob@example.com',
        role: 'viewer',
        status: 'inactive',
        createdAt: '2026-02-10T09:15:00Z',
    },
];
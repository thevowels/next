export type UserRole = 'admin' | 'editor' | 'viewer';
export type UserStatus = 'active' | 'inactive' | 'pending';

export interface User {
    _id: string;
    name: string;
    email: string;
    role: UserRole;
    status: UserStatus;
    avatarUrl?: string;
    createdAt: string;
}
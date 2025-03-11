export enum UserRole {
  User = 'user',
  Organization = 'organization',
  Admin = 'admin',
}

export interface User {
  id: string
  firstName: string
  lastName: string
  role: UserRole
}

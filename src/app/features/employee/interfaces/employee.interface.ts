export type Country = 'Colombia' | 'USA' | 'Mexico' | 'Canada' | 'Spain' | 'South Korea' | 'Germany' | 'Russia' | 'Vietnam'
type Status = 'Active' | 'Inactive'

export interface Employee {
    id: string,
    fullName: string,
    country: Country,
    responsibility: string,
    birthDate: Date,
    picture: string,
    status: Status
}
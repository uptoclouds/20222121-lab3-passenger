export interface Event {
  id: number
  category: string
  title: string
  description: string
  location: string
  name: string
  trips: string
  petsAllowed: boolean
  organizer: string
}
export interface StudentEvent {
  id: number
  studentId: string
  name: string
  surname: string
  gpa: number
  image: string
  penAmount: number
  description: string
}
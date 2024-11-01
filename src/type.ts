export interface Event {
  _id: string;
  name: string;
  trips: number;
  airline: Airline[];
  __v: number;
}
export interface Airline {
  _id: string;
  name: string;
  country: string;
  logo: string;
  slogan: string;
  head_quaters: string;
  website: string;
  established: string;
  __v: number;
}

export interface PassengerResponse {
  totalPassengers: number;
  totalPages: number;
  data: Event[];
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
export enum GuestTypes {
  SEND = '@guests/SEND',
  GET = '@guests/GET'
}

export interface Guest {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  guests: number
}

export interface GuestsState {
  data: Guest
}
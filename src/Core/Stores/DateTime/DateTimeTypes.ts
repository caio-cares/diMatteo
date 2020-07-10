export enum DateTimeTypes {
  SEND = '@dateTime/SEND',
  GET = '@dateTime/GET'
}

export interface DateTime {
  date: string,
  hour: string
}

export interface DateTimeState {
  data: DateTime
}
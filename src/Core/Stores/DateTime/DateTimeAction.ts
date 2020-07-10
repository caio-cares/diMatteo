import { DateTimeTypes } from './DateTimeTypes';
import { action } from 'typesafe-actions';

export const setDateTime = (data: number) => action(DateTimeTypes.SEND, data);
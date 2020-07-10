import { History, LocationState } from "history";
import { Guest } from '../../../Core/Stores/Guest/GuestTypes';
import { DateTime } from '../../../Core/Stores/DateTime/DateTimeTypes';
import { Experience } from '../../../Core/Stores/Experience/ExperienceTypes';

export interface StateProps {
  history: History<LocationState>;
  experience: Experience;
  dateTime: DateTime;
  guest: Guest;
}

export interface DispatchProps {
  setGuests(value: any): void;
}

export type Props = StateProps & DispatchProps;

export default Props;
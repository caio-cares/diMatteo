import { History, LocationState } from "history";
import { Guest } from '../../../Core/Stores/Guest/GuestTypes';
import { Experience } from '../../../Core/Stores/Experience/ExperienceTypes';
import { DateTime } from '../../../Core/Stores/DateTime/DateTimeTypes';

export interface StateProps {
  history: History<LocationState>;
  guest: Guest;
  experience: Experience;
  dateTime: DateTime
}

export type Props = StateProps;

export default Props;
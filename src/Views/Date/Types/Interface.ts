import { History, LocationState } from "history";
import { DateTime } from './../../../Core/Stores/DateTime/DateTimeTypes';
import { Experience } from './../../../Core/Stores/Experience/ExperienceTypes';

export interface StateProps {
  history: History<LocationState>;
  dateTime: DateTime;
  experience: Experience;
}

export interface DispatchProps {
  setDateTime(value: any): void;
}

export type Props = StateProps & DispatchProps;

export default Props;
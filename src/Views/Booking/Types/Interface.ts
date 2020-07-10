import { History, LocationState } from "history";
import { Experience } from './../../../Core/Stores/Experience/ExperienceTypes';

export interface StateProps {
  experiences: Experience[];
  history: History<LocationState>;
}

export interface DispatchProps {
  getExperiences(): void
  setExperience(value: any): void;
}

export type Props = StateProps & DispatchProps;

export default Props;
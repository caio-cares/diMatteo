import { DateTimeState } from './../DateTime/DateTimeTypes';
import { ExperiencesState } from './../Experience/ExperienceTypes';
import { GuestsState } from '../Guest/GuestTypes';

interface ApplicationState {
  experiences: ExperiencesState,
  guest: GuestsState,
  dateTime: DateTimeState
}

export default ApplicationState;
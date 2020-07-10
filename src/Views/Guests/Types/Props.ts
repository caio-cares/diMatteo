import { bindActionCreators, Dispatch } from 'redux';
import ApplicationState from "../../../Core/Stores/Interface";
import * as guestsAction from '../../../Core/Stores/Guest/GuestAction';

export const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(guestsAction, dispatch);

export const mapStateToProps = (state: ApplicationState) => ({
  guest: state.guest.data,
  dateTime: state.dateTime.data,
  experience: state.experiences.currentExperience
});

export default { mapStateToProps, mapDispatchToProps };
import { bindActionCreators, Dispatch } from 'redux';
import ApplicationState from "../../../Core/Stores/Interface";
import * as dateActions from '../../../Core/Stores/DateTime/DateTimeAction';

export const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(dateActions, dispatch);

export const mapStateToProps = (state: ApplicationState) => ({
  dateTime: state.dateTime.data,
  experience: state.experiences.currentExperience
});

export default { mapStateToProps, mapDispatchToProps };
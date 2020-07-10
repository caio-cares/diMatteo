import ApplicationState from "../../../Core/Stores/Interface";

import { bindActionCreators, Dispatch } from 'redux';
import * as ExperiencesActions from '../../../Core/Stores/Experience/ExperienceAction';

export const mapStateToProps = (state: ApplicationState) => ({
  experiences: state.experiences.data
});

export const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(ExperiencesActions, dispatch);

export default { mapStateToProps, mapDispatchToProps};
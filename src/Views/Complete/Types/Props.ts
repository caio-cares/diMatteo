import ApplicationState from "../../../Core/Stores/Interface";

export const mapStateToProps = (state: ApplicationState) => ({
  guest: state.guest.data,
  dateTime: state.dateTime.data,
  experience: state.experiences.currentExperience
});

export default mapStateToProps;
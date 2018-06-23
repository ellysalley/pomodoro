import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Timer from "./presenter";
import { actionCreators as Actions } from "../../reducer";

function mapStateToProps(state) {
  const { isPlaying, elapsedTime, timerDuration } = state;
  return {
    isPlaying,
    elapsedTime,
    timerDuration
  }
}

function mapDispatchToProps(dispatch){
  return {
    startTimer: bindActionCreators(Actions.startTimer, dispatch),
    restartTimer: bindActionCreators(Actions.restartTimer, dispatch),
    addSecond: bindActionCreators(Actions.addSecond, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Timer);
// Import

// Actions

const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECOND = "ADD_SECOND";

// Action Creators

function startTimer() {
  return {
    type: START_TIMER
  };
}

function restartTimer() {
  return {
    type: RESTART_TIMER
  };
}

function addSecond() {
  return {
    type: ADD_SECOND
  };
}

// Reducer

const TIMER_DURATION = 1500;

const initialState = {
  isPlaying: false,
  elapsedTime: 0,
  timerDuration: TIMER_DURATION, 
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        isPlaying: true
      }
    case RESTART_TIMER:
      return {
        ...state,
        isPlaying: false,
        elapsedTime: 0
      }
    case ADD_SECOND:
      if (state.elapsedTime < TIMER_DURATION) {
        return {
          ...state,
          elapsedTime: state.elapsedTime + 1
        };
      } else {
        return {
          ...state,
          isPlaying: false
        };
      }
    default:
      return state;
  }
}
// Export Action Creators 

const actionCreators = {
  startTimer,
  restartTimer, 
  addSecond,
}

export { actionCreators };
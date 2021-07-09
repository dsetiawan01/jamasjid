export const setNewAdzanTime = (state, payload) => {
  state.adzanCurrent = payload.current;
  state.adzanNext = payload.next;
}

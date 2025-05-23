import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone(state, action) {
      state.fetchDone = true;
    },
    markFetchingStarted(state, action) {
      state.currentlyFetching = true;
    },
    markFetchingDone(state, action) {
      state.currentlyFetching = false;
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;

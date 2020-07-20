import { createSlice, createSelector } from '@reduxjs/toolkit';

export const candidateSlice = createSlice({
  name: 'cadidates',
  initialState: [],
  reducers: {
    add: (state, action) => {
      return [...state, action.payload]
    },
    edit: (state, action) => {

    },
    deleteCandidate: (state, action) => {
      return state.filter(item => item.id !== action.payload)
    },
    selectedCandidate: (state, action) => {
      let getCandidate = state.filter(item => item.id === action.payload)[0]
      let getCandidates = state.filter(item => item.id !== action.payload)

      return [
        ...getCandidates,
        {
          ...getCandidate,
          selected: true
        }
      ]
    }
  },
});

export const { add, edit, deleteCandidate, selectedCandidate } = candidateSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;
export const selectCandidates = state => state.candidates
export const selectCandidate = (state, action) => {
  console.log(action)
}

export default candidateSlice.reducer;

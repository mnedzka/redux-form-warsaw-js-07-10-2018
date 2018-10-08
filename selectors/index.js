import { createSelector } from "reselect";
const questionSelector = state => state.questions.list;

export const randomQuestionsSelector = createSelector(
  questionSelector,
  questions => questions.sort(() => 0.5 - Math.random()).slice(0, 5)
)
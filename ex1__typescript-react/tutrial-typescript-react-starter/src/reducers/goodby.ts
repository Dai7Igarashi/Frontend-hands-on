import { QuestionAction } from '../actions/index';

export interface GoodByState {
  languageName: string;
  questionLevel: number;
}

const initialGoodByState: GoodByState = {
  languageName: "TypeScript",
  questionLevel: 3,
}

const goodbyReducer = (state: GoodByState = initialGoodByState, action: QuestionAction): GoodByState => {
  switch (action.type) {
    case 'INCREMENT_QUESTION':
      return {
        ...state,
        questionLevel: state.questionLevel + 1,
      };
    case 'DECREMENT_QUESTION':
      return {
        ...state,
        questionLevel: state.questionLevel - 1,
      };
    }
  return state;
}

export default goodbyReducer;

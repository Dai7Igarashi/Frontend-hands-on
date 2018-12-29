import { EnthusiasmAction } from '../actions/index';

export interface HelloState {
  languageName: string;
  enthusiasmLevel: number;
}

const initialHelloState: HelloState = {
  languageName: "TypeScript",
  enthusiasmLevel: 5,
}

const helloReducer = (state: HelloState = initialHelloState, action: EnthusiasmAction): HelloState => {
  switch (action.type) {
    case 'INCREMENT_ENTHUSIASM':
      return {
        ...state,
        enthusiasmLevel: state.enthusiasmLevel + 1,
      };
    case 'DECREMENT_ENTHUSIASM':
      return {
        ...state,
        enthusiasmLevel: state.enthusiasmLevel - 1,
      };
  }
  return state;
}

export default helloReducer;

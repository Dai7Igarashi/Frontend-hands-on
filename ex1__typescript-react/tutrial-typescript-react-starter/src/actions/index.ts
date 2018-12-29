/**
 * Hello.tsx actions
 */
const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';
const DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM';

type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;
type DECREMENT_ENTHUSIASM = typeof DECREMENT_ENTHUSIASM;

interface IncrementEnthusiasm {
  type: INCREMENT_ENTHUSIASM;
}

interface DecrementEnthusiasm {
  type: DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export const incrementEnthusiasm = (): IncrementEnthusiasm => {
  return {
    type: INCREMENT_ENTHUSIASM
  }
}

export const decrementEnthusiasm = (): DecrementEnthusiasm => {
  return {
    type: DECREMENT_ENTHUSIASM
  }
}

/**
 * GoodBy.tsx actions
 */

const INCREMENT_QUESTION = 'INCREMENT_QUESTION';
const DECREMENT_QUESTION = 'DECREMENT_QUESTION';

type INCREMENT_QUESTION = typeof INCREMENT_QUESTION;
type DECREMENT_QUESTION = typeof DECREMENT_QUESTION;

interface IncrementQuestion {
  type: INCREMENT_QUESTION;
}

interface DecrementQuestion {
  type: DECREMENT_QUESTION;
}

export type QuestionAction = IncrementQuestion | DecrementQuestion;

export const incrementQuestion = (): IncrementQuestion => {
  return {
    type: INCREMENT_QUESTION
  }
}

export const decrementQuestion = (): DecrementQuestion => {
  return {
    type: DECREMENT_QUESTION
  }
}

import GoodBy, { GoodByProps } from '../components/GoodBy';
import * as actions from '../actions/index';
import { RootState } from '../state';
import { goodbySelector } from '../selectors/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: RootState): GoodByProps => {
  const goodby = goodbySelector(state);
  return {
    questionLevel: goodby.questionLevel,
    name: goodby.languageName,
  };
}

const mapDispatchToProps = (dispatch: Dispatch<actions.QuestionAction>) => {
  return {
    onIncrement: () => dispatch(actions.incrementQuestion()),
    onDecrement: () => dispatch(actions.decrementQuestion()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoodBy);

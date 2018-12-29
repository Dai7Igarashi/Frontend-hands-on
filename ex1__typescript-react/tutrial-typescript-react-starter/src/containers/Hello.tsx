import Hello, { HelloProps } from '../components/Hello';
import * as actions from '../actions/index';
import { RootState } from '../state';
import { helloSelector } from '../selectors/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: RootState): HelloProps => {
  const hello = helloSelector(state);
  return {
    enthusiasmLevel: hello.enthusiasmLevel,
    name: hello.languageName,
  };
}

const mapDispatchToProps = (dispatch: Dispatch<actions.EnthusiasmAction>) => {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);

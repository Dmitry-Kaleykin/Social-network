import {addPost} from '../../../redux/profile-reducer';
import Writter from './Writter';
import { connect } from 'react-redux';
import { getWritterDataState } from '../../../redux/selectors/profile-selectors';

function mapStateToProps (state) {
    return {
        writterData: getWritterDataState(state),
    }
}

const WritterContainer = connect(mapStateToProps, {addPost} )(Writter);

export default WritterContainer;
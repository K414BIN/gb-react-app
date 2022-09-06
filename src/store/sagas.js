import { call, put, takeLatest, delay } from 'redux-saga/effects'
import {addMessage, AUTHORS} from "./messages/actions";

function* onAddMessageWithSaga(action) {
    yield put(addMessage(action));
    if (action.message.author !== AUTHORS.BOT) {
        const botMessage = 'This is Chat-bot answering';
        action.message=botMessage;
        yield delay(2000);
        yield put(addMessage(action));
    }
}

function* mySaga() {
    yield takeLatest("MESSAGES::ADD_MESSAGE_WITH_SAGA", onAddMessageWithSaga);
}
export default mySaga;

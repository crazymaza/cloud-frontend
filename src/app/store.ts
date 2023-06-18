import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import mainScreen from '../coponents/firstScreenMain/reducer';
import stepOne from '../coponents/stepOne/reducer';
import stepTwo from '../coponents/stepTwo/reducer';
import stepThree from '../coponents/stepThree/reducer';
import modal from '../coponents/modal/reduser';

export const store = configureStore({
  reducer: {
    mainScreen,
    stepOne,
    stepTwo,
    stepThree,
    modal
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

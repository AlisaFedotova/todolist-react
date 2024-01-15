import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useAppDispatch } from '../store/store';
import { useAppSelector } from '../store/store';
import { setState } from '../store/stateTabsSlice';

export default function StateTabs() {
  const dispatch = useAppDispatch();
  const tabState: string = useAppSelector((state) => state.stateTabs.state);

  const changeState = (state: string) => {
    dispatch(setState({ state }));
  };

  return (
    <ToggleButtonGroup color="primary" value={tabState} exclusive>
      <ToggleButton onClick={() => changeState('all')} value="all">
        All
      </ToggleButton>
      <ToggleButton onClick={() => changeState('active')} value="active">
        Active
      </ToggleButton>
      <ToggleButton onClick={() => changeState('completed')} value="completed">
        Completed
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

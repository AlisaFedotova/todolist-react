import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useAppDispatch } from '../store/store';
import { useAppSelector } from '../store/store';
import { setState } from '../store/stateTabsSlice';

export default function StateTabs() {
  const dispatch = useAppDispatch();
  const tabState: string = useAppSelector((state) => state.stateTabs.state);

  return (
    <ToggleButtonGroup color="primary" value={tabState} exclusive>
      <ToggleButton
        onClick={() => dispatch(setState({ state: 'all' }))}
        value="all">
        All
      </ToggleButton>
      <ToggleButton
        onClick={() => dispatch(setState({ state: 'active' }))}
        value="active">
        Active
      </ToggleButton>
      <ToggleButton
        onClick={() => dispatch(setState({ state: 'completed' }))}
        value="completed">
        Completed
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

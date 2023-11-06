import { RootState, useAppSelector } from "../../store/store";

const TopBar = () => {
  const topTitle = useAppSelector((state: RootState) => state.topbar.title);

  return <></>;
};

export default TopBar;

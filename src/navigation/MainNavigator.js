import { useSelector } from "react-redux";
import HomepageNavigator from "./HomepageNavigation";
import AuthNavigator from "./AuthNavigation";

const MainNavigator = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  if (currentUser) {
    return <HomepageNavigator />;
  }

  return <AuthNavigator />;
};

export default MainNavigator;

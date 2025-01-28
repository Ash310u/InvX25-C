import useNavigation from "../hooks/useNavigation";
import FirstPathRouter from "./PathOriented/FirstPathRouter";
import SecondPathRouter from "./PathOriented/SecondPathRouter";

const Router = ({ path, pathNum, children }) => {
    const { currentPath } = useNavigation();

    if (pathNum === 1) {
        return (
            <FirstPathRouter path={path}>
                {children}
            </FirstPathRouter>
        )
    } else if (pathNum === 2) {
        return (
            <SecondPathRouter path={path} >
                {children}
            </SecondPathRouter>
        )
    } else if (currentPath === path) {
        return children;
    } else {
        return null;
    }
}

export default Router;

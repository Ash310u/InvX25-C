import useNavigation from "../../hooks/useNavigation";

const SecondPathRouter = ({ children, path }) => {
    const { secondPath } = useNavigation();

    if (secondPath === path) {
        return children;
    } else {
        return null;
    }
}

export default SecondPathRouter;
import useNavigation from "../../hooks/useNavigation";

const FirstPathRouter = ({ path, children }) => {
    const { firstPath } = useNavigation();

    if (firstPath === path) {
        return children;
    } else {
        return null;
    }
}

export default FirstPathRouter;
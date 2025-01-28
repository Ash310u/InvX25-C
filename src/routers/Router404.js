import useNavigation from '../hooks/useNavigation'

const Router404 = ({ children }) => {

    const { firstPath, navigationState } = useNavigation();

    let firstPathArr = [];
    Object.keys(navigationState).forEach((route) => {
        if (route !== 'meta') {
            firstPathArr.push(route)
        }
    })

    if (!firstPathArr.includes(firstPath)) {
        return children;
    }

}

export default Router404
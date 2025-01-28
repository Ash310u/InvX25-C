import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    let currentPathArray = currentPath.split('');

    // ----- First Path Checker ------------------------------------------------------------------------
    let firstPathEnd = false;
    let firstPathArray = [];

    let firstPath = firstPathArray.join('');

    currentPathArray.map((charecter, i) => {
        if (charecter === "/") {
            if (i !== 0) {
                firstPathEnd = true;
                firstPath = firstPathArray.join('');
            }
        } else {
            if (firstPathEnd === false) {
                firstPathArray.push(charecter);
            }

            // This assures that the variable gets updated if the path doesn't has a "/" at end
            if (currentPathArray.length === i + 1) {
                firstPathEnd = true;
                firstPath = firstPathArray.join('');
            }
        }
        return null;
    })
    // -------------------------------------------------------------------------------------------------

    // ----- Second Path Checker ------------------------------------------------------------------------
    let slashCount = 0;
    let secondPathEnd = false;
    let secondPathArray = [];

    let secondPath = secondPathArray.join('');

    currentPathArray.map((charecter, i) => {
        if (charecter === "/") {
            if (i !== 0) {
                slashCount = slashCount + 1;
                if (slashCount === 2) {
                    secondPathEnd = true;
                    secondPath = secondPathArray.join('');
                }
            }
        } else {
            if (secondPathEnd === false) {
                if (slashCount === 1) {
                    secondPathArray.push(charecter);
                }

                // This assures that the variable gets updated if the path doesn't has a "/" at end
                if (currentPathArray.length === i + 1) {
                    secondPathEnd = true;
                    secondPath = secondPathArray.join('');
                }
            }

        }
        return null;
    })
    // -------------------------------------------------------------------------------------------------

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname)
        }

        window.addEventListener('popstate', handler);

        return () => {
            window.removeEventListener('popstate', handler);
        }

    }, [])

    let navigationState = {
        meta: {
            fullPath: currentPath,
            firstPath: firstPath,
            secondPath: secondPath,
        },
        home: {
            meta: {
                title: "Home",
                isActive: false,
            }
        },
        login: {
            meta: {
                title: "Login",
                isActive: false,
            },
        },
        orders: {
            meta: {
                title: "Orders",
                isActive: false,
            }
        },
        invoice: {
            meta: {
                title: "Invoice",
                isActive: false,
            }
        }
    }

    // Updating `navigationState` object
    // firstPath

    // HOME
    if (firstPath === 'home') {
        navigationState.home.meta.isActive = true;
        Object.keys(navigationState).forEach((key) => {
            if (key !== 'home' && key !== 'meta') {
                navigationState[key].meta.isActive = false
            }
        })
    }

    // BAGS
    if (firstPath === 'login') {
        navigationState.login.meta.isActive = true;
        Object.keys(navigationState).forEach((key) => {
            if (key !== 'login' && key !== 'meta') {
                navigationState[key].meta.isActive = false
            }
        })
    }

    // ORDERS
    if (firstPath === 'orders') {
        navigationState.orders.meta.isActive = true;
        Object.keys(navigationState).forEach((key) => {
            if (key !== 'orders' && key !== 'meta') {
                navigationState[key].meta.isActive = false
            }
        })
    }

    // INVOICE
    if (firstPath === 'invoice') {
        navigationState.invoice.meta.isActive = true;
        Object.keys(navigationState).forEach((key) => {
            if (key !== 'invoice' && key !== 'meta') {
                navigationState[key].meta.isActive = false
            }
        })
    }

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    }

    return <NavigationContext.Provider value={{ currentPath, firstPath, secondPath, navigationState, navigate }} >
        {children}
    </NavigationContext.Provider>
}

export { NavigationProvider };
export default NavigationContext;
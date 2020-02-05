import React from 'react';
import { withRouter } from 'react-router-dom'
import Header from "./header";

function Layout(props) {
    // children is a prop passed in thanks to react-router-dom's Switch
    // This contains the current route selected
    // withRouter allows us to get the current route as a prop, as long as we export the function as a parameter of withRouter
    const { location, children } = props;

    let renderHead = location.pathname !== "/"  ? (<Header />) : "";
    // let renderFooter = location.pathname !== "/" ? (<Footer />) : "";

    return (
        <main className="d-flex flex-column h-100">
            <header>
                {renderHead}
            </header>
            {children}
            {/* {renderFooter} */}
        </main>
    )
}

export default withRouter(Layout);
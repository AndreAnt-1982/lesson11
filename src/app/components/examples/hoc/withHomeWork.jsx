import React from "react";

import PropTypes from "prop-types";
// import Divider from "../common/divider";

import CardWrapper from "../../common/Card";

/* const btEnter = (
    <button className="btn btn-primary" onClick={btnEnter}>
        Enter
    </button>
); */
// const btnLogOut = <button className="btn btn-danger">Log Out</button>;

const SimlpeComponent = ({ onLogin, onLogOut, isAuth }) => {
    return isAuth ? (
        <button className="btn btn-secondary" onClick={onLogOut}>
            Выйти из системы
        </button>
    ) : (
        <button className="btn btn-primary" onClick={onLogin}>
            Войти
        </button>
    );
};

SimlpeComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

// HOC Component
const withFunctionals = (Component) => (props) => {
    const handleLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const handleLogout = () => {
        localStorage.removeItem("auth");
    };
    const isAuth = localStorage.getItem("auth");

    return (
        <CardWrapper>
            <Component
                isAuth={isAuth}
                onLogOut={handleLogout}
                onLogin={handleLogin}
                {...props}
            />
        </CardWrapper>
    );
};
// Component with HOC
const withHomeWorkComponent = withFunctionals(SimlpeComponent);

export default withHomeWorkComponent;

import React, {useState, createContext} from "react";

export const SleepContext = createContext();

export const SleepProvider = (props) => {
    //set state vars
    const [formData, setFormData] = useState({
        // id: Date.now(),  -- NODE backend will generate ID automatically
        email: "",
        password: "",
        keepLoggedIn: false,
    });

    const [errState, setErrState] = useState({
        id: "",
        email: "",
        password: "",
        keepLoggedIn: "",
    });

    const [canLogin, setCanLogin] = useState(false);
    const [loggingIn, setLoggingIn] = useState(false);

    return (
        <SleepContext.Provider
            value={[
                formData,
                setFormData,
                errState,
                setErrState,
                canLogin,
                setCanLogin,
                loggingIn,
                setLoggingIn
            ]}
        >
            {props.children}
        </SleepContext.Provider>
    );
};

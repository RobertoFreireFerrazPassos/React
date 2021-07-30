export const AuthorizationService = {
    isLoged: () => localStorage.getItem("AuthorizationReactApp"),
    login: () => localStorage.setItem("AuthorizationReactApp", true),
    logout: () => localStorage.setItem("AuthorizationReactApp", false)
};
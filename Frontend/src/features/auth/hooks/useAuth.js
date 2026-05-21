import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout, getMe } from "../services/auth.api";

export const useAuth = () => {
    const context = useContext(AuthContext);
    const { user, setUser, loading, setLoading } = context;

    const handleLogin = async ({ info, password }) => {
        setLoading(true);
        try {
            const resp = await login({ info, password });
            setUser(resp.user);
        } catch (err) {

        } finally {
            setLoading(false);
        }
    }

    const handleRegister = async ({ username, email, password }) => {
        setLoading(true);
        try {
            const resp = await register({ username, email, password });
            setUser(resp.user);
        } catch (err) {

        } finally {
            setLoading(false);
        }
    }

    const handleLogout = async () => {
        setLoading(true);
        try {
            const resp = await logout();
            setUser(null);
        } catch (err) {

        } finally {
            setLoading(false);
        }
    }

    return { user, loading, handleLogin, handleRegister, handleLogout };
}
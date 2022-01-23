import { BASE_URL } from "../hooks/useFetch";
export const checkToken = async (token) => {
    if (!token) {
        return false;
    }
    const json = await fetch('http://localhost:2020/api/check_token', {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    const res = await json.json();

    if (res.user) {
        return res.user;
    }

    return false;
};
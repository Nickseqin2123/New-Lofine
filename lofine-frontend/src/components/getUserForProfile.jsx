import axios from "axios";


export default async function getUserProfile() {
    const token = `JWT ${localStorage.getItem('access')}`;

    try {
        const response = await axios.get('http://127.0.0.1:8000/api/v8/auth/users/me/', {
            headers: {
                'Authorization': token
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching user profile:', error);
    }
}
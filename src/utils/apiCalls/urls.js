import config from "@utils/secret/config";

const API_URL = config.API_URL;

export const API_POSTS = `${API_URL}/posts`;

export const API_SIGN_UP = `${API_URL}/auth/signup`;

import { client} from '../utils/api-client'
import { store } from '../redux/store';

const serverUrl = import.meta.env.VITE_API_BASE_URL;

export const userService =  {

  loginUser: async (email, password) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const url = `${serverUrl}/auth/login`
      const method = 'POST'
      const response = await client(url, method, { email, password });
      if (!response)
        throw new Error("Cannot login");
      return response
    } catch (e) {
      throw e
    }
  },

  getUsers:async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      const url = `${serverUrl}/auth/users?limit=50`
      const method = 'GET'
      const response = await client(url, method);
      if (!response)
        throw new Error("Not Authorized");
      return response
    } catch (e) {
      throw e
    }
  },

  registerUser: async (data) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const url = `${serverUrl}/auth/create`
      const method = 'POST'
      const response = await client(url, method, { ...data });
      if (!response)
        throw new Error("Cannot login");
      return response
    } catch (e) {
      throw e
    }
  },

  fetchUserFromStore: () => {
    let user = store?.getState()?.user?.user
    let token;
    if (user) {
      token = user.token || ''
    }
    return {
      user,
      token
    }
  },

  verifyToken: async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      const url = `${serverUrl}/auth/authorized`
      console.log('Url =============>>>> ', url)
      const method = 'POST'
      const response = await client(url, method);
      if (!response) {
        return {
          status: 'failed',
          error: true
        }
      } else {
        return response
      }
      
    } catch (e) {
      throw e
    }
  },

}
import axios from 'axios'
import Cookies from 'universal-cookie';

const checkUser = async (prop) => {
    const cookie = new Cookies()
  
    try {
      const token = cookie.get('jwt')
      if(!token || token === 'logout') return  
      
      const user = await axios({
        method: 'POST',
        url: 'http://localhost:4000/api/v1/loggedIn',
        data: {
          token
        }
      })
  
      if (user.data.status === 'success') prop.setUser(user.data.data.user);
  
    } catch (error) {
      prop.setUser(null);
      cookie.set('jwt', 'logout', { path: '/' })
    }
  }
  
 export default checkUser;
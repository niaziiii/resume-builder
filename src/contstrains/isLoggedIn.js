import axios from 'axios'
import Cookies from 'universal-cookie';

const checkUser = async (prop) => {
    const cookie = new Cookies()
  
    try {
      const token = cookie.get('jwt')
      if(!token || token === 'logout') {
        setTimeout(() => {
        return 
        }, 1500);
      }  
      
      const user = await axios({
        method: 'POST',
        url: 'https://mk-resume-builder.herokuapp.com/api/v1/loggedIn',
        data: {
          token
        }
      })
  
      if (user.data.status === 'success') prop.setUser(user.data.data.user);
      console.log(user);
      return user
    } catch (error) {
      prop.setUser(null);
      cookie.set('jwt', 'logout', { path: '/' })
       
    }
  }
  
 export default checkUser;
import axios from 'axios'
import Cookies from 'universal-cookie';

console.log(document.getElementsByTagName('body'));
const checkUser = async (prop) => {
  console.log(prop);
    const cookie = new Cookies()
  
    try {
      const token = cookie.get('jwt')
      if(!token || token === 'logout') {
        setTimeout(() => {
        return prop.setAnimation(false)
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
      return prop.setAnimation(false)
    } catch (error) {
      prop.setUser(null);
      cookie.set('jwt', 'logout', { path: '/' })
       prop.setAnimation(false)
    }
  }
  
 export default checkUser;
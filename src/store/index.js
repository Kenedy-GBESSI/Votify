import { createStore } from "vuex";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import router from '../router'
export default createStore({
  state:{
     user: JSON.parse(localStorage.getItem("User")),
     errEmail :"",
     errPassword: "",
  },
  mutations:{
    SET_USER(state,user){
       state.user = user 
    },
    SET_EMAIL_ERROR(state, error){
      state.errEmail = error
    },
    SET_PASSWORD_ERROR(state, error){
       state.errPassword = error
    },
    CLEAR_USER(state){
        state.user = null
    }
    
  },
  actions: {
     async login({commit}, data){
         const {email, password} = data;
         try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/Dashboard");
         } catch (error){
          switch (error.code) {
             case "auth/invalid-email":
                 commit("SET_EMAIL_ERROR", "Invalid-email")
                 break;
             case "auth/auth-user-not-found":
                 commit("SET_EMAIL_ERROR","User not exist !")
                 break;
             case "auth/wrong-password":
                commit("SET_PASSWORD_ERROR", "Wrong password !")
                 break;
             default:
                 commit("SET_EMAIL_ERROR", "Password or Email is wrong!")
                 break;
          }
          return 
     }
      commit('SET_USER',auth.currentUser);
      localStorage.setItem("User",JSON.stringify(auth.currentUser))-
      router.push("/Dashboard");
    },
    logout({commit}){
      commit("CLEAR_USER")
      localStorage.removeItem("User")
      router.push("/")
      
    },
    fetchUser({commit}){
        auth.onAuthStateChanged( async user =>{
           if(user === null){
              commit('CLEAR_USER')
           }else{
              commit("SET_USER",user)
           }
           if(router.isReady() && router.currentRoute.value.path === '/'){
              router.push({name:'dashboard'})
           }
        })
    }
  },
  getters: {

  }


})
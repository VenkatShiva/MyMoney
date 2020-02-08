export  function login(email,password) {
    return async function(dispatch) {
        try {
            fetch().then(()=>{
                await dispatch({ type: "login", logIn: true });
            }).catch((err)=>{

            })
            
        } catch(error){
            console.log(error);
        }
    };
};
import React, {useState} from "react"
import { StyleSheet, View, Text } from "react-native"
import { Input, Icon, Button  } from "react-native-elements"
import { validateEmail } from "../../utils/validation"

export default function RegisterForm(){
    const [showPassword, setShowPassword] = useState(false)
    const [showRepeatPassword, setShowRepeatPassword] = useState (false)
    const [formData, setFormData] = useState(defaultFormValues())
           
     const onSubmit = () => {
         if(formData.email.length===0||formData.password.length===0||formData.repeatPassword.length===0){
              console.log("todos los campos son requeridos")
            } else if (!validateEmail(formData.email)){
                console.log("el email no es correcto")
            } else if (formData.password !== formData.repeatPassword){
                console.log("las contraseñas deben ser identicas")
            } else if (formData.password.length < 6){
                console.log("el password debe tener minimo 6 caracteres")
            } else{
                console.log("todo ok")
            }

     }
     
      const onChange = (e, type) => {
         // console.log(type)
         // console.log(e.nativeEvent.text)
         // setFormData({[type]: e.nativeEvent.text})
          setFormData({...formData, [type]: e.nativeEvent.text})
      }

     return(
        <View style={styles.formContainer}>
            <Input
            
                 placeholder="Correo Electronico"
                 containerStyle={styles.inputForm}
                 onChange={(e)=>onChange(e, "email")}
                 rightIcon={<Icon type="material-community" name="at" iconStyle={styles.iconRight} />} 
            />
            <Input
            
                 placeholder="Contraseña"
                 containerStyle={styles.inputForm}
                 password={true}
                 secureTextEntry={showPassword ? false : true}
                 onChange={(e)=>onChange(e, "password")}
                 rightIcon={<Icon type="material-community" 
                 name={showPassword ? "eye-off-outline" : "eye-outline"} iconStyle={styles.iconRight} 
                 onPress={()=> setShowPassword(!showPassword)}
                 
                 />}
            />
             <Input
            
                 placeholder="Repetir contraseña"
                 containerStyle={styles.inputForm}
                 password={true}
                 secureTextEntry={showRepeatPassword ? false : true}
                 onChange={(e)=>onChange(e, "repeatPassword")}
                 rightIcon={<Icon type="material-community" 
                 name={showRepeatPassword ? "eye-off-outline" : "eye-outline"} iconStyle={styles.iconRight} 
                 onPress={()=> setShowRepeatPassword(!showRepeatPassword)}
                 
                 
                 />}
            />
             <Button
                title="UNETE"
                containerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister} //cambiar color de caja
                onPress={onSubmit}
             />
             
        </View>
    )
}

function defaultFormValues() {
    return{
        email: '',
        password: '',
        repeatPassword: ''
    }
}


const styles = StyleSheet.create({
formContainer:{
    marginTop: 30,
    
},
inputForm:{
    width: "100%",
    marginTop: 20
},
btnContainerRegister:{
    marginTop:20,
    width:"95%"
},
btnRegister:{
backgroundColor:"#00a680"
},
iconRight:{
    color: "#c1c1c1"
}
})
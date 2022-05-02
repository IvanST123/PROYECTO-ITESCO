import { StyleSheet, Text, View, ScrollView, Alert, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Button, Icon, Input, Image } from 'react-native-elements'
import CountryPicker from "react-native-country-picker-modal"
import { map, size, filter } from "lodash"

import  {loadImageFromGallery} from "../../utils/validation"

const widthScreen = Dimensions.get("window").width 

export default function AddSearchForm({ toastRef, setLoading, navigation }) {
    const [formData, setFormData] = useState(defaultFormValues())
    const [errorName, setErrorName] = useState(null)
    const [errorDescription, setErrorDescription] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorAddress, setErrorAddress] = useState(null)
    const [errorPhone, setErrorPhone] = useState(null)
    const [imagesSelected, setImagesSelected] = useState([])





    const addSearch = () => { 
        console.log(formData)
        console.log("todo bien")
    }

    return (
    <ScrollView style={styles.viewContainer}>
        <ImageSearch
        
        imageSearch={imagesSelected[0]}

        /> 
      <FormAdd
      
      formData={formData}
      setFormData={setFormData}
      errorName={errorName}
      errorDescription={errorDescription}
      errorEmail={errorEmail}
      errorAddress={errorAddress}
      errorPhone={errorPhone}

      />
       
       <UploadImage
       toastRef={toastRef}
       imagesSelected={imagesSelected}
       setImagesSelected={setImagesSelected}
       />
        
      <Button
          title="Crear Noticia"
          onPress={addSearch}
          buttonStyle={styles.btnAddSearch}
      />

    </ScrollView>
  )
}
function ImageSearch({ imageSearch }) {
    return (
        <View style={styles.viewPhoto}>
             <Image
             style={{width: widthScreen, height: 200}}
            source={
                imageSearch
                    ? {uri: imageSearch}
                    : require ("../../../assets/no image.png")
                }
             />
        </View>
    )
}

function UploadImage({toastRef, imagesSelected, setImagesSelected}) {
    const imageSelect = async() => {
        const response = await loadImageFromGallery([4, 3])
        if (!response.status) {
            toastRef.current.show("no has seleccionado ninguna imagen.", 3000)
           return
        }
        setImagesSelected([...imagesSelected, response.image])
    }

    const removeImage = (image) => {
        Alert.alert(
            "eliminar imagen",
            "seguro de eliminar imagen?",
            [
                {
                    text: "no",
                    style: "cancel"
                },
                {
                    text: "si",
                    onPress: () => {
                        setImagesSelected(
                           filter(imagesSelected, (imageUrl) => imageUrl !==image)
                        )
                    }
                }
            ],

            {
                cancelable: true 
            }

        )
    }

    return (
        <ScrollView
               
             horizontal
             style={styles.viewImages}     

        > 
        {
            size(imagesSelected) < 10 && (
                <Icon
                         type='material-community'
                         name='camera'
                         color="#7a7a7a"
                         containerStyle={styles.containerIcon}
                        onPress={imageSelect}
                        />
            )          
        }

        {

             map(imagesSelected, (imageSearch, index) => (
                <Avatar
                     key={index}
                     style={styles.miniatureStyle}
                     source= {{ uri: imageSearch }}
                     onPress={() => removeImage(imageSearch)}
                />
              ))    
        }
             

        </ScrollView>

    )
}


function FormAdd({ formData, setFormData, errorName, errorDescription, errorEmail, errorAddress, errorPhone }) {
    const [country, setCountry] = useState("MX")
    const [callingCode, setCallingCode] = useState("52")
    const [phone, setphone] = useState("")

    const onChange = (e, type) => {
        setFormData({...formData, [type] : e.nativeEvent.text})
    }

    return(
        <View style={styles.viewForm}>
            <Input
                placeholder='Titulo de la noticia...'
                defaultValue={formData.name}
                onChange={(e) => onChange(e, "name")}
                errorMessage={errorName}
            />

<Input
                placeholder='Nombre del autor...'
                defaultValue={formData.address}
                onChange={(e) => onChange(e, "address")}
                errorMessage={errorAddress}
            />
            <Input
                keyboardType='email-address'
                placeholder='Email de contacto...'
                defaultValue={formData.email}
                onChange={(e) => onChange(e, "email")}
                errorMessage={errorEmail}
            />
            <Input
                placeholder='Titulo de la noticia...'
            />
            <View style={styles.phoneView}>
            <CountryPicker
                  withFlag
                  withCallingCode
                  withFilter
                  withCallingCodeButton
                  containerStyle={styles.countryPicker}
                  countryCode={country}
                  onSelect={(country) => {
                      setFormData({...formData, "country": country.cca2, "callingCode": country.callingCode[0]})
                      
                 }}
            />  
            <Input
            placeholder='WhatsApp del autor...'
            keyboardType='phone-pad'
            containerStyle={styles.inputPhone}
            defaultValue={formData.phone}
            onChange={(e) => onChange(e, "phone")}
            errorMessage={errorPhone}
            />
           
            </View>

            <Input
            placeholder='Descripcion de la Noticia...'
            multiline
            containerStyle={styles.textArea}
            defaultValue={formData.description}
            onChange={(e) => onChange(e, "description")}
            errorMessage={errorDescription}
            />


                </View>



    )

}

const defaultFormValues = () => {
    return {
        name: "",
        description: "",
        email: "",
        phone: "",
        address: "",
        country: "MX",
        callingCode: "52"



    }
}

const styles = StyleSheet.create({
    viewContainer: {
        height: "100%"
    },
    viewForm: {
        marginHorizontal: 10,
    },
    textArea: {
        height: 100,
        width: "100%"
    },
    phoneView: {
        width: "80%", 
        flexDirection: "row"  
    },
    inputPhone: {
      width: "80%",
     
    },
    btnAddSearch: {
        margin: 20,
        backgroundColor: "#00b3ff"
    },
    viewImages: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 30
    },
    containerIcon:{
        alignItems: 'center',
        justifyContent: "center",
        marginRight: 10,
        height: 70,
        width: 79,
        backgroundColor: "#e3e3e3"
    },
    miniatureStyle:{
        width:70,
        height:70,
        marginRight: 10
    },
    viewPhoto:{
        alignItems: "center",
        height: 200,
        marginBottom: 20
    }
})
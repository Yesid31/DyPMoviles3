import {View, StyleSheet} from 'react-native'
import { useState,useEffect } from 'react';
import { TextInput } from 'react-native-paper' 
export default function Input (){
    //States
   const [Nota1,setNota1]=useState('');
   const [Nota2,setNota2]=useState(0);
   const [Nota3,setNota3]=useState(0);
   const [Resultado,setResultado]=useState('');

   //Metodos
   let calculate  =(oper)=>{
   let mresult=0
   let mnota1=parseFloat(Nota1);
   let mnota2=parseFloat(Nota2);
   let mnota3=parseFloat(Nota3);
   switch (oper){
    case Nota1 >=0 && Nota1 <=5 :
        mresult = mnota1*0.30 
        break;

        case Nota2 >=0 && Nota2 <=5 :
        mresult = mnota2*0.35
        break;
        
        case Nota3>=0 && Nota3 <=5 :
        mresult = mnota3*0.35
        break;


         mresult = (mnota1*0.35+mnota2*0.35+mnota3*0.35) /3 



   }
   setResultado(mresult)
   
   }
   

    return(
        <View style={styles.container}>
       <TextInput 

      label="Identificación">
        
      </TextInput>
      <TextInput 
      label="Nombres">
        
      </TextInput>
      <TextInput 
      label="Asignatura">
        
      </TextInput>


      <TextInput
      label="Ingrese Nota1"
      onChangeText={Nota1 => setNota1(Nota1)}
      value={Nota1}

      
      
      />
        
      

      <TextInput 
      label="Nota2">
        
      </TextInput>
      
      <TextInput 
      label="Nota3">
        
      </TextInput>
    
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
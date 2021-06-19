import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    texto: string
    color?: string
    action: (numeroTexto: string) => void
}

const BotonCalc = ({texto, color = '#2d2d2d', action}:Props) => {
    return (
        <TouchableOpacity
            onPress={() => action(texto)}
        >
            <View style={{...styles.boton, backgroundColor: color, 
                            width: (texto === '0') ? 160 : 70
             }}>
                    <Text 
                        style={{...styles.botonTexto, 
                            color: (color === '#9b9b9b') ? 'black' : 'white'}}        
                    >{texto}</Text>
            </View>
        </TouchableOpacity>
          
    )
}

export default BotonCalc

import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import BotonCalc from '../components/BotonCalc';
import { useCalculadora } from './hooks/useCalculadora';



const CalculadoraScreen = () => {

    const {
        numero,
        numeroAnterior,
        clear,
        positivoNegativo,
        btnDelete,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular
    } = useCalculadora()

    return (
        <View style={styles.calculadoraContainer}>
            {
                (numeroAnterior !== '0') && (
                    <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
                )
            }
            <Text 
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {numero}
            </Text>

            <View style={styles.fila}>
                <BotonCalc texto="C" color="#9b9b9b" action={clear}/>
                <BotonCalc texto="+/-" color="#9b9b9b" action={positivoNegativo}/>
                <BotonCalc texto="del" color="#9b9b9b" action={btnDelete}/>
                <BotonCalc texto="/" color="#ff9427" action={btnDividir}/>
            </View>

            
            <View style={styles.fila}>
                <BotonCalc texto="7" action={armarNumero}/>
                <BotonCalc texto="8" action={armarNumero}/>
                <BotonCalc texto="9" action={armarNumero}/>
                <BotonCalc texto="X" color="#ff9427" action={btnMultiplicar}/>
            </View>

            <View style={styles.fila}>
                <BotonCalc texto="4" action={armarNumero}/>
                <BotonCalc texto="5" action={armarNumero}/>
                <BotonCalc texto="6" action={armarNumero}/>
                <BotonCalc texto="-" color="#ff9427" action={btnRestar}/>
            </View>
           
          <View style={styles.fila}>
                <BotonCalc texto="1" action={armarNumero}/>
                <BotonCalc texto="2" action={armarNumero}/>
                <BotonCalc texto="3" action={armarNumero}/>
                <BotonCalc texto="+" color="#ff9427" action={btnSumar}/>
            </View>
           
            <View style={styles.fila}>
                <BotonCalc texto="0" action={armarNumero}/>
                <BotonCalc texto="." action={armarNumero}/>
                <BotonCalc texto="=" color="#ff9427" action={calcular}/>
            </View>         
           
        </View>
    )
}

export default CalculadoraScreen

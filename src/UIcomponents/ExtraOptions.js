import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import { Button, List, TextInput } from 'react-native-paper';
import { Map } from 'immutable';

import Price from './OptionsComponent/Price'
import Storage from './OptionsComponent/Storage'
import Brand from './OptionsComponent/Brand';
const styles = StyleSheet.create({
    optionsContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
    },

    priceContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputPrice: {
        display: 'flex',
        flexDirection: 'row',
    }
    ,
    inputPriceNumber: {

        flex: 7,
        margin: 10,
    },
    inputPriceUnit: {
        flex: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },



})


function ExtraOptions({ temporaryClothing, onSetTemporaryClothing, ...rest }) {
    /* 
    buydate: null,
    price: null,
    brand: null,
    storage: null,
    */

    /* 
    THINK: 

    1> buydate 

    컴포넌트 호출 시 현재 날짜 받음 
    년도만 뽑아냄 -> numberpicker 에 반영 
    년, 월만 선택하도록 

    number picker 선택이 완료되면 redux 로 상태변경 
    구매일
    
    number picker 로 구성 

    2> price 

    <Input/> 원 
    onChange 할 때마다 상태변경 


    */


    return (

        <List.Accordion title="추가옵션 펼치기" style={styles.inputContainer} >
            <Price />
            <Storage />
            <Brand />
        </List.Accordion>
    )

}




export default ExtraOptions;
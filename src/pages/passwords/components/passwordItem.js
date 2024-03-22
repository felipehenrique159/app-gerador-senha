import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'

export default function passwordItem({data, removePassword}) {
  return (
    <Pressable onLongPress={removePassword} style={styles.container}>
      <Text style={styles.text}>{data}</Text>
      {/* <Text style={styles.text}>***************</Text> */}
      {/* <Ionicons size={32} color={'white'} name='eye-sharp'/> */}
      {/* <Ionicons size={32} color={'white'} name='eye-off-sharp'/> */}
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
         backgroundColor: '#0e0e0e',
         padding: 14,
         width: '100%',
         marginBottom: 14,
         borderRadius: 8,
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'space-between'
    },
    text:{
        color: '#FFF'
    }
})
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'
import React from 'react'
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
interface ContainerProps {
    children:React.JSX.Element
}
export default function Container(props:ContainerProps) {
    const {children} = props
    console.log(props)
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <SafeAreaView style={[{ backgroundColor: '#fff', flex: 1}]}>
            <StatusBar
                backgroundColor="transparent" 
                translucent={true} 
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}

            />
            {children}
        </SafeAreaView>
    )
}
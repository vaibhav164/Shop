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
        <SafeAreaView style={[{ backgroundColor: '#fff', flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={'#fff'}
            />
            {children}
        </SafeAreaView>
    )
}
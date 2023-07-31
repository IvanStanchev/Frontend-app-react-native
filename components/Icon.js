import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'


function Icon({ onPress, icon, color, size}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <MaterialCommunityIcons name={icon} size={size ? size : 28} color={color ? color : '#f1f1f1'}/>
        </TouchableOpacity> 
        )
}

export default Icon;
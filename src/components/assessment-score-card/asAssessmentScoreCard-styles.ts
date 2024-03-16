import { StyleSheet } from "react-native";
import { COLORS, SPACING, Typography } from "../../theme";

export const styles = StyleSheet.create({
    container:{
        marginBottom:SPACING.space_28,
        justifyContent:'space-between',
        marginHorizontal:SPACING.space_20,
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:SPACING.space_16,
    },
    headerImageContainer:{
        justifyContent:'space-between',
        alignItems:'center'
    },
    headerImageContainerImage:{
        height:SPACING.space_40,
        width:SPACING.space_40,
    },
    headerImageContainertitle:{
        fontFamily:Typography.secondary.bold,
        fontSize:SPACING.space_14,
        lineHeight:SPACING.space_20,
        color:COLORS.primary['50'],
    },
    headerProgressContainer:{
        alignItems:'center',
        justifyContent:'space-between',
    },
    headerProgressContainertitle:{
        fontFamily:Typography.secondary.bold,
        fontSize:SPACING.space_32,
        lineHeight:SPACING.space_44,
        color:COLORS.white,
        marginBottom:SPACING.space_12,
    },
    bottomContainer:{
        alignItems:'center',
    },
    bottomContainerTitle:{
        fontFamily:Typography.secondary.bold,
        fontSize:SPACING.space_14,
        lineHeight:SPACING.space_20,
        color:COLORS.white,
        textAlign:'center'
    }

})
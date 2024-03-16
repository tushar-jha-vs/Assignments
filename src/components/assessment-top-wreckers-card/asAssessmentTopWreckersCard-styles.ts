import { StyleSheet } from "react-native";
import { COLORS, SPACING, Typography } from "../../theme";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.primary['700'],
        // justifyContent:'',
        paddingVertical:SPACING.space_24,
        // paddingHorizontal:SPACING.space_8,
        alignItems:'center',
        gap:SPACING.space_24,
    },
    subContainer:{
        // backgroundColor:'green',
    },
    subContainerTitle:{
        fontFamily:Typography.secondary.bold,
        fontSize:SPACING.space_18,
        lineHeight:SPACING.space_24,
        textAlign:'center',
        color:COLORS.white,
        marginBottom:SPACING.space_24,
    },
    detailContainer:{
        flexDirection:'row',
        // backgroundColor:'purple',
        gap:SPACING.space_8,
    },
    detailSubContainer:{
        alignItems:'center',
        // backgroundColor:'orange',
    },
    detailSubContainerImage:{
        height:SPACING.space_76,
        width:SPACING.space_76,
        marginBottom:SPACING.space_8,
    },
    detailSubContainerFooter:{
        gap:SPACING.space_12,
        // backgroundColor:'white',
    },
    detailSubContainerFooterProgress:{
        alignItems:'center',
        // backgroundColor:'yellow',
        gap:SPACING.space_8,
    },
    detailSubContainerFooterProgressTitle:{
        fontFamily:Typography.secondary.bold,
        fontSize:SPACING.space_14,
        lineHeight:SPACING.space_20,
        textAlign:'center',
        color:COLORS.white,
    },
    detailSubContainerFooterTitle:{
        fontFamily:Typography.primary.bold,
        fontSize:SPACING.space_14,
        lineHeight:SPACING.space_20,
        textAlign:'center',
        color:COLORS.white,
    },
    bottomContainer:{
        flexDirection:'row',
        gap:SPACING.space_4,
        alignItems:'center',
    },
    bottomContainerTitle:{
        fontFamily:Typography.primary.bold,
        fontSize:SPACING.space_14,
        lineHeight:SPACING.space_20,
        color:COLORS.white,
    },
    bottomContainerImage:{
        height:SPACING.space_12,
        width:SPACING.space_12,
    }
})
import { StyleSheet } from "react-native";
import { COLORS, SPACING, Typography } from "../../theme";

export const styles = StyleSheet.create({
    container:{
        // backgroundColor:'red',
        gap:SPACING.space_24,
        marginHorizontal:SPACING.space_20,
        marginTop:SPACING.space_4,

        // alignItems:'center',
    },
    headerContainer:{
        // backgroundColor:'blue',
        gap:SPACING.space_12,
        alignItems:'center',
        marginHorizontal:SPACING.space_16,
    },
    headerContainerRange:{
        fontFamily:Typography.primary.bold,
        fontSize:SPACING.space_14,
        lineHeight:SPACING.space_20,
        textAlign:'center',
        color:COLORS.white,
    },
    bottomContainer:{
        paddingHorizontal:SPACING.space_24,
        paddingVertical:SPACING.space_32,
        borderRadius:SPACING.space_16,
        backgroundColor:COLORS.white,
        gap:SPACING.space_24,
    },
    bottomContainerContent:{
        paddingHorizontal:SPACING.space_16,
        paddingVertical:SPACING.space_20,
        borderRadius:SPACING.space_8,
        // gap:SPACING.space_8,
        backgroundColor:COLORS.primary['50'],
    },
    bottomContainerTitle:{
        fontFamily:Typography.primary.medium,
        fontSize:SPACING.space_16,
        lineHeight:SPACING.space_24,
        color:COLORS.neutral['700'],
    },
    bottomContainerInput:{
        fontFamily:Typography.primary.medium,
        fontSize:SPACING.space_16,
        color:COLORS.neutral['700'],
    },
    bottomContainerButtons:{
        // backgroundColor:'yellow',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    button:{
        // backgroundColor:'red',
        paddingHorizontal:SPACING.space_20,
    },
    buttonTitle:{
        fontFamily:Typography.primary.bold,
        fontSize:SPACING.space_16,
        lineHeight:SPACING.space_24,
        color:COLORS.primary['600'],
        textAlign:'center',
    },
    emptyContainerOne:{
        paddingVertical:SPACING.space_32,
        borderRadius:SPACING.space_8,
        backgroundColor:COLORS.primary['300'],
        marginTop:-SPACING.space_76,
        zIndex:-SPACING.space_1,
        marginHorizontal:SPACING.space_16,
    },
    emptyContainerTwo:{
        paddingHorizontal:SPACING.space_24,
        paddingVertical:SPACING.space_32,
        borderRadius:SPACING.space_8,
        backgroundColor:COLORS.primary['500'],
        marginTop:-SPACING.space_76,
        zIndex:-SPACING.space_2,
        marginHorizontal:SPACING.space_24,
    }
})
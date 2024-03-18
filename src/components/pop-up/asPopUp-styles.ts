import { StyleSheet } from "react-native";
import { COLORS, SPACING, Typography } from "../../theme";

const styles = StyleSheet.create({
    modalOverlay: {
        flex: SPACING.space_1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#00000066'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SPACING.space_16,
        padding:SPACING.space_16,
        backgroundColor:COLORS.white
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
    },
    image: {
        height: SPACING.space_267,
        width: SPACING.space_267,
        marginTop: SPACING.space_40,
        marginHorizontal: SPACING.space_28,
    },
    subContainer: {

    },
    textContainer: {
        marginHorizontal: SPACING.space_24,
        marginTop: SPACING.space_20,
    },
    title: {
        fontFamily: Typography.secondary.bold,
        fontSize: SPACING.space_24,
        lineHeight: SPACING.space_32,
        textAlign: 'center',
        color: COLORS.neutral[700],
    },
    description: {
        fontFamily: Typography.primary.medium,
        fontSize: SPACING.space_14,
        lineHeight: SPACING.space_16,
        textAlign: 'center',
        color: COLORS.neutral[700],
        marginTop: SPACING.space_4,
        marginBottom: SPACING.space_8
    },
    progressContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'baseline'
    },
    progressTitle: {
        fontFamily: Typography.secondary.bold,
        marginRight: SPACING.space_8,
        fontSize: SPACING.space_14,
        lineHeight: SPACING.space_21,
        color: COLORS.charcoal,
    }
})

export default styles;
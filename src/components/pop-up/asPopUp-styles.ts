import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

import { COLORS, SPACING, Typography } from "../../theme";

interface IStyles {
    modalOverlay: ViewStyle;
    container: ViewStyle;
    image: ImageStyle;
    subContainer: ViewStyle;
    textContainer: ViewStyle;
    title: TextStyle;
    description: TextStyle;
    progressContainer: ViewStyle;
    progressTitle: TextStyle;
}

const styles : IStyles = StyleSheet.create({
    modalOverlay: {
        alignItems: 'center',
        backgroundColor: COLORS.grey,
        flex: SPACING.space_1,
        justifyContent: 'center',
    },
    container: {
        flex: SPACING.space_1,
    },
    image: {
        height: SPACING.space_267,
        marginHorizontal: SPACING.space_28,
        marginTop: SPACING.space_40,
        width: SPACING.space_267,
    },
    subContainer: {
        alignItems: 'center',
        backgroundColor:COLORS.white,
        borderRadius: SPACING.space_16,
        justifyContent: 'center',
        padding:SPACING.space_16,
    },
    textContainer: {
        marginHorizontal: SPACING.space_24,
        marginTop: SPACING.space_20,
    },
    title: {
        color: COLORS.neutral[700],
        fontFamily: Typography.secondary.bold,
        fontSize: SPACING.space_24,
        lineHeight: SPACING.space_32,
        textAlign: 'center',
    },
    description: {
        color: COLORS.neutral[700],
        fontFamily: Typography.primary.medium,
        fontSize: SPACING.space_14,
        lineHeight: SPACING.space_16,
        marginBottom: SPACING.space_8,
        marginTop: SPACING.space_4,
        textAlign: 'center',
    },
    progressContainer: {
        alignItems: 'baseline',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    progressTitle: {
        color: COLORS.charcoal,
        fontFamily: Typography.secondary.bold,
        fontSize: SPACING.space_14,
        lineHeight: SPACING.space_21,
        marginRight: SPACING.space_8,
    }
})

export default styles;
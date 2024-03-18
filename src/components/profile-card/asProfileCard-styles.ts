import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from "react-native";

import { COLORS, SPACING, Typography } from "../../theme";

interface IStyles {
    container: ViewStyle;
    title: TextStyle;
    icon: ImageStyle;
}

const styles : IStyles = StyleSheet.create({
    container: {
        borderBottomColor: COLORS.primary[100],
        borderBottomWidth: SPACING.space_1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: SPACING.space_20,
    },
    title: {
        color: COLORS.neutral[700],
        fontFamily: Typography.primary.bold,
        fontSize: SPACING.space_16,
        lineHeight: SPACING.space_24,
    },
    icon: {
        height: SPACING.space_16,
        width: SPACING.space_16,
    },
})

export default styles;
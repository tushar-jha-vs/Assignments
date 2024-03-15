import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { COLORS, SPACING, Typography } from "../../theme";

interface Styles {
    container: ViewStyle;
    text: TextStyle;
    icon: ViewStyle;
}

const styles : Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: SPACING.space_20,
        borderBottomColor: '#D0F7F1',
        borderBottomWidth: 0.5,
    },
    text: {
        fontFamily: Typography.primary.bold,
        fontSize: SPACING.space_16,
        lineHeight: SPACING.space_24,
        color: COLORS.neutral[700]
    },
    icon: {
        height: SPACING.space_16,
        width: SPACING.space_16,
    },
})

export default styles;
import {StyleSheet, View, ViewStyle} from 'react-native';

import {COLORS, SPACING} from '../../theme';

const Separator = () => {
  return <View style={styles.separator}></View>;
};

export default Separator;

interface Styles {
  separator: ViewStyle;
}

const styles: Styles = StyleSheet.create({
  separator: {
    height: SPACING.space_1,
    width: '100%',
    backgroundColor: COLORS.neutral100,
  },
});

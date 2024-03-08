import {StyleSheet, View, ViewStyle} from 'react-native';
import {COLORS} from '../../theme/theme';

const Separator = () => {
  return <View style={styles.separator}></View>;
};

export default Separator;

interface Styles {
  separator: ViewStyle;
}

const styles: Styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: COLORS.neutral100,
  },
});

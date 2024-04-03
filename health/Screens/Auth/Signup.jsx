import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Text from '../../components/Text';
import useHeaderHeight from '../../hooks/getHeight';

const Signup = () => {
  const { insets } = useHeaderHeight();
  const [input, setInput] = useState('');
  return (
    <View>
      <View style={{ height: insets.top }} />
      <View style={styles.container}>
        <Text
          style={{ marginTop: 46, marginBottom: 151 }}
          fontWeight="700"
          children={'SignUp'}
        />
        <Input
          style={styles.textBox}
          value={input}
          onChangeText={(value) => setInput(value)}
          placeholder="Email"
        />
        <Input placeholder={'Name'} style={styles.textBox} />
        <Input placeholder={'Phone Number'} style={styles.textBox} />
        <Input
          placeholder={'Password'}
          secureTextEntry
          style={styles.textBox}
        />
        <Input
          placeholder={'Confirm Password'}
          secureTextEntry
          style={styles.textBox}
        />
        <View
          style={{
            alignItems: 'center',
            paddingHorizontal: '30%',
            marginTop: 30,
          }}
        >
          <Button text="SignUp" />
        </View>
      </View>
    </View>
  );
};

export default Signup;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
});

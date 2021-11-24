import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Button, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../shared/hooks/useTypedSelector';
import { navigate } from '../../navigation/navigationService';
import { RouteName } from '../../navigation/types';
import { onLogOut } from '../../store/auth/action';

export const HomeScreen = () => {
  const { t, i18n } = useTranslation();
  const { isAuthenticated, user } = useTypedSelector(state => state.auth);
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {!isAuthenticated && (
        <Button title="Auth" onPress={() => navigate(RouteName.Auth)} />
      )}
      {isAuthenticated && (
        <View>
          <Text>{user?.id}</Text>
          <Text>{user?.info.email}</Text>
          <Text>{user?.info.firstname}</Text>
          <Text>{user?.info.lastname}</Text>
          <Text>{user?.info.photoUrl}</Text>
          <Button title="Sign Out" onPress={() => dispatch(onLogOut())} />
        </View>
      )}
      <Text>{t('home.title')}</Text>
      <Button
        onPress={() =>
          i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')
        }
        title={`Change for ${i18n.language === 'fr' ? 'EN' : 'FR'}`}
      />
    </View>
  );
};

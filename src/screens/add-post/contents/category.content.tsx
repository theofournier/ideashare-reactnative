import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View, TouchableOpacity } from 'react-native';
import { PostType } from '../../../shared/constants';
import { Wrapper } from '../components';
import { useAddPost } from '../context';

export default function CategoryContent() {
  const { t } = useTranslation();
  const { post, setPost } = useAddPost();
  return (
    <Wrapper
      title={t('addPost.category.title')}
      description={t('addPost.category.description')}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          style={{
            backgroundColor:
              post.category === PostType.idea ? '#F3BA4C' : 'transparent',
          }}
          onPress={() => setPost({ ...post, category: PostType.idea })}>
          <Text>{t('addPost.category.ideaTitle')}</Text>
          <Text>{t('addPost.category.ideaDescription')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor:
              post.category === PostType.issue ? '#F3BA4C' : 'transparent',
          }}
          onPress={() => setPost({ ...post, category: PostType.issue })}>
          <Text>{t('addPost.category.issueTitle')}</Text>
          <Text>{t('addPost.category.issueDescription')}</Text>
        </TouchableOpacity>
      </View>
    </Wrapper>
  );
}

import React from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {PokeCard, HeaderSearchBar} from 'components';
import styles from './styles';
import useHome from './useHome';
import {Colors} from 'styles';

const Home = ({navigation}) => {
  const {
    isFetching,
    isPlaceholderData,
    error,
    isError,
    data,
    limit,
    setLimit,
    filter,
    setFilter,
    searchResults,
    handleSearchPokemon,
    searchKeyword,
  } = useHome();
  if (isError) {
    return (
      <View style={styles.errorContainer}>
        <Text>{'Error: ' + error.message}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <HeaderSearchBar
        onSearch={keyword => handleSearchPokemon(keyword)}
        keyword={searchKeyword}
        data={searchResults}
      />
      <View>
        <FlatList
          data={filter.data}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          contentContainerStyle={styles.filterSection}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={styles.btnFilter(filter.selected === item)}
              onPress={() => setFilter({...filter, selected: item})}>
              <Text style={styles.btnFilterLabel(filter.selected === item)}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          contentContainerStyle={styles.listSection}
          initialNumToRender={10}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          renderItem={({item, index}) => (
            <PokeCard data={item} loading={isPlaceholderData} />
          )}
          onEndReached={() => (data.length > 15 ? setLimit(limit + 4) : null)}
          ListFooterComponent={
            isFetching && (
              <ActivityIndicator
                size="small"
                color={Colors.PRIMARY}
                style={{marginTop: 5}}
              />
            )
          }
        />
      </View>
    </View>
  );
};

export default Home;

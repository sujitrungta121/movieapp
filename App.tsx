



import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "./src/components/header";
import Search from "./src/components/search";
import Cards from "./src/components/cards";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./src/components/loading";

export interface MovieProps{
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average:number
    vote_count:number
}

const App = () => {

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<MovieProps[]>([]);
  const [search, setSearch] = useState<string>("");
  const [isLoading,setIsLoading]=useState(false)
  useEffect(() => {
    const fetchMoviesList = async () => {
      setIsLoading(true)
      try {
        const options = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/movie/popular',
          params: { language: 'en-US', page: '1' },
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer YOUR_API_KEY'
          }
        };

        axios.request(options)
          .then(res => {
            
            setMovies(res?.data?.results);
            setIsLoading(false)
            setFilteredMovies(res?.data?.results); 
          })
          .catch(err => Alert.alert(err.message));
      } catch (error) {
        Alert.alert("Error fetching movies");
      }
    };

    fetchMoviesList();
  }, []); 
  useEffect(() => {
    if (search.trim() === "") {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(search.toLowerCase()) ||
        movie.original_title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  }, [search, movies]); 
  const handleSearch = (text: string) => {
    setSearch(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Search search={search} setSearch={handleSearch} />

      {
      !isLoading ?  filteredMovies.length > 0 ? (
        <>
          
          <FlatList
            data={filteredMovies}
            renderItem={({ item }) => <Cards movie={item} />}
            keyExtractor={(item) => item.id.toString()}
            style={styles.card}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </>
      ) : (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>No Data To Show...</Text>
        </View>
      )

      :
     <Loading message={"Fetching Data..."}/>
      }
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginTop: 20,
    padding: 20,
    marginBottom: 10,
    rowGap: 20,
    display: "flex",
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  loadingText: {
    fontSize: 20,
    fontWeight: "600",
  },
  separator: {
    height: 10,
    backgroundColor: 'transparent',
  },
});

export default App;

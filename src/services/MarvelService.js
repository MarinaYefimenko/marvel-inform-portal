import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => { 
   const {loading, request, error, clearError, process, setProcess} = useHttp();

   const _apiBase = 'https://gateway.marvel.com:443/v1/public/',
         _apiKey = 'apikey=6b860c1151f1f1b315a6d1dd0a7f4269',
         _baseOffsetCharacters = 296,
         _baseOffsetComics = 10;

   const getAllCharacters = async (offset = _baseOffsetCharacters) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
     }

   const getCharacterByName = async (name) => {
      const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
      return res.data.results.map(_transformCharacter);
  }

   const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
     }   

   const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? char.description : 'Description not found',
            thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
     }

   const getAllComics = async (offset = _baseOffsetComics) => {
      const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`);
      return res.data.results.map(_transformComic);
   }

   const getComic = async (id) => {
      const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
      return _transformComic(res.data.results[0]);
   }

   const _transformComic = (comic) => {
      return {
          id: comic.id,
          title: comic.title,
          price: !(comic.prices[0].price === 0) ? comic.prices[0].price : null,
          thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
          link: comic.urls[0].url,
          description: comic.description,
          pageCount: !(comic.pageCount === 0) ? comic.pageCount : null,
          language: !(comic.textObjects.length === 0) ? comic.textObjects[0].language : null
      }
   }

     return {
         loading,
         error,
         process,
         setProcess,
         getCharacter,
         getCharacterByName,
         getAllCharacters,
         clearError,
         getAllComics,
         getComic
      }
}

export const _transformCharDescription = (char) => {
   char.description = char.description.length <= 200 ? char.description : `${char.description.slice(0, 200)}...`;
   return char;
} 

export default useMarvelService;
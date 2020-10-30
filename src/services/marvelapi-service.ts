import axios from 'axios';

export default class MarvelAPIServise {

  _urlBase = 'https://gateway.marvel.com/v1/public';
  _apikey = 'bee01df4612be419e6981380fc9143ed';
  _hash = '6d61ee38cc5b15a56375066f84aa3be4';
  
  async getData(url: string) {
    try {
      const res = await axios(`${this._urlBase}${url}&apikey=${this._apikey}&hash=${this._hash}`);
      const results = res.data.data.results;
      return results;
      
    } catch (err) {
      alert(err);
    }
  }
  
  getAllCharacters = async () => {
    const res = await this.getData(`/characters?ts=1&offset=297&limit=30`);
    return res.map(this._transformCharacter);
  };

  getCharacter = async (id: number) => {
    const res = await this.getData(`/characters?ts=1&id=${id}`)
    const character = res[0];
    return this._transformCharacter(character);
  };

  getAllComics = async () => {
    const res = await this.getData(`/comics?ts=1&limit=100`);
    return res.map(this._transformComics);
  };

  getComics = async (id: number) => {
    const res = await this.getData(`/comics?ts=1&id=${id}`);
    const comics = res[0];
    return this._transformComics(comics);
  };

  getAllEvents = async () => {
    const res = await this.getData(`/events?ts=1&limit=20`);
    return res.map(this._transformEvent);
  };

  getEvent = async (id: number) => {
    const res = await this.getData(`/events?ts=1&id=${id}`)
    const event = res[0];
    return this._transformEvent(event);
  };

 getAllSeries = async () => {
    const res = await this.getData(`/series?ts=1&limit=50`);
    return res.map(this._transformSeries);
  };
  
  getSeries = async (id: number) => {
    const res = await this.getData(`/series?ts=1&id=${id}`)
    const series = res[0];
    return this._transformEvent(series);
  };

  _transformCharacter(character: any) {
    return {
      id: character.id,
      name: character.name,
      description: character.description,
      img: character.thumbnail.path,
      comics: character.urls[0].url,
      overview: character.urls[1].url
    }
  }

  _transformComics(comics: any){
    return {
      id: comics.id,
      title: comics.title,
      description: comics.description,
      img: comics.thumbnail.path,
      overview: comics.urls[0].url,
    }
  };

  _transformEvent(event: any) {
    return {
      id: event.id,
      title: event.title,
      description: event.description,
      img: event.thumbnail.path,
      overview: event.urls[0].url
    }
  }

  _transformSeries(series: any) {
    return {
      id: series.id,
      title: series.title,
      description: series.description,
      img: series.thumbnail.path,
      overview: series.urls[0].url
    }
  }
}
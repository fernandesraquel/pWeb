import React, { useEffect, useState } from 'react';
import SearchInput from './SearchInput';

const api = 'https://api.jikan.moe/v3/search/';

export function FetchSearch(){
    const [info, setInfo] = useState({});
    const [text, setText] = useState('');

    useEffect(() => {
        if (text) {
          setInfo({});
    
          fetch(
            `${api}anime?filter[text]=${text}`
          )
            .then((res) => res.json())
            .then((data) => {
              setInfo(data.results);
            });
        }
      }, [text]);

      return (
        <div className="App">
          <h1>Animes</h1>
          <SearchInput value={text} onChange={(search) => setText(search)} />
        </div>
      );

}
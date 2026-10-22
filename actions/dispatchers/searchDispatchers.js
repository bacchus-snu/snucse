import {DataCon, Url} from '../../utils';
import * as types from '../actionTypes';

function normalize(result) {
  return {
    count: (result && result.count) || 0,
    data: result && Array.isArray(result.data) ? result.data : []
  };
}

export function loadSearchResult(dispatch, query, category = '', page, num) {
  const empty = {data: [], count: 0};

  if (query === undefined) {
    dispatch({
      type: types.LOAD_SEARCH_RESULT,
      articles: empty,
      comments: empty,
      profiles: empty,
      tags: empty
    });
    return;
  }
  DataCon.loadDataFromServer(Url.getUrl(`/search/${category}`, {q: query, page, limit: num})).then(result => {
    dispatch({
      type: types.LOAD_SEARCH_RESULT,
      articles: normalize(result.articles),
      comments: normalize(result.comments),
      profiles: normalize(result.profiles),
      tags: normalize(result.tags)
    });
  });
}

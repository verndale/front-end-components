"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useSearchResults;

require("core-js/modules/es.array.includes.js");

var _react = require("react");

function useSearchResults(props) {
  const {
    searchQueryKey,
    sortQueryKey
  } = props;
  const {
    current: defaultSearchParams
  } = (0, _react.useRef)(new URLSearchParams(window.location.search));
  const {
    current: labels
  } = (0, _react.useRef)(JSON.parse(props.labels));
  const {
    current: keys
  } = (0, _react.useRef)(JSON.parse(props.resultsKeys));
  const {
    current: sortOptions
  } = (0, _react.useRef)(JSON.parse(props.sortOptions));
  const {
    current: itemsPerPage
  } = (0, _react.useRef)(parseInt(props.resultsPerPage, 10));
  const [loading, setLoading] = (0, _react.useState)(false);
  const [term, setTerm] = (0, _react.useState)(defaultSearchParams.get(searchQueryKey));
  const [sort, setSort] = (0, _react.useState)(defaultSearchParams.get(sortQueryKey) || sortOptions[0].value);
  const [items, setItems] = (0, _react.useState)([]);
  const [suggestion, setSuggestion] = (0, _react.useState)('');
  const [totalItems, setTotalItems] = (0, _react.useState)(0);
  const [page, setPage] = (0, _react.useState)(1);
  const totalPages = (0, _react.useMemo)(() => Math.ceil(totalItems / itemsPerPage), [totalItems]);
  const from = (0, _react.useMemo)(() => page * itemsPerPage - itemsPerPage + 1, [items, page]);
  const to = (0, _react.useMemo)(() => {
    const _to = from + itemsPerPage - 1;

    return _to > totalItems ? totalItems : _to;
  }, [totalItems, itemsPerPage, from]);

  const fetchData = async (_term, _sort, _page) => {
    if (!_term) {
      setItems([]);
      return;
    }

    setLoading(true);
    const url = location.toString().replace(location.search, '');
    let queries = [`${searchQueryKey}=${_term}`, `${sortQueryKey}=${_sort}`];
    queries = queries.join('&');
    window.history.pushState({}, document.title, `${url}?${queries}`);
    queries = `${queries}&${props.pageQueryKey}=${_page}`;
    queries = props.endpoint.includes('?') ? `&${queries}` : `?${queries}`;
    const data = await (await fetch(props.endpoint + queries)).json();

    if (data) {
      setItems(data[keys.items]);
      setSuggestion(data[keys.suggestion]);
      setTotalItems(data[keys.totalItems]);
      setLoading(false);
    }
  };

  const handleSearch = newTerm => {
    setPage(1);
    setTerm(newTerm);
    fetchData(newTerm, sort, 1);
  };

  const handleSort = newSort => {
    setPage(1);
    setSort(newSort);
    fetchData(term, newSort, 1);
  };

  const handlePageChange = newPage => {
    setPage(newPage);
    fetchData(term, sort, newPage);
  };

  (0, _react.useEffect)(() => {
    fetchData(term, sort, page);
  }, []);
  return {
    labels,
    keys,
    loading,
    items,
    totalItems,
    totalPages,
    term,
    suggestion,
    sortOptions,
    sort,
    page,
    from,
    to,
    handleSearch,
    handleSort,
    handlePageChange
  };
}
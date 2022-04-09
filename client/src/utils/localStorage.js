export const getSavedCoinIds = () => {
  const savedCoinIds = localStorage.getItem('saved_coins')
    ? JSON.parse(localStorage.getItem('saved_coins'))
    : [];

  return savedCoinIds;
};

export const saveCoinIds = (CoinIdArr) => {
  if (CoinIdArr.length) {
    localStorage.setItem('saved_coins', JSON.stringify(CoinIdArr));
  } else {
    localStorage.removeItem('saved_coins');
  }
};

export const removeCoinId = (coinId) => {
  const savedCoinIds = localStorage.getItem('saved_coins')
    ? JSON.parse(localStorage.getItem('saved_coins'))
    : null;

  if (!savedCoinIds) {
    return false;
  }

  const updatedSavedCoinIds = savedCoinIds?.filter((savedCoinId) => savedCoinId !== coinId);
  localStorage.setItem('saved_coins', JSON.stringify(updatedSavedCoinIds));

  return true;
};

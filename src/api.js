//Base URL
const base_url = "https://api.rawg.io/api/";
//Getting the dates
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Geting the day
const getCurrentDay = () => {
  const day = new Date().getDate() + 1;
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10&key=7397d43b67c441d8a8e424642cd086c5`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10&key=7397d43b67c441d8a8e424642cd086c5`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10&key=7397d43b67c441d8a8e424642cd086c5`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${new_games}`;

//GAME DETAIL
export const gamesDetailsURL = (game_id) => `${base_url}games/${game_id}?key=7397d43b67c441d8a8e424642cd086c5`;
//GAME SCREENSHOTS
export const gamesScreenshotsURL = (game_id) => {
  return `${base_url}games/${game_id}/screenshots?key=7397d43b67c441d8a8e424642cd086c5`;
};
//Searched game
export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9&key=7397d43b67c441d8a8e424642cd086c5`;

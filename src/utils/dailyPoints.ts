export const calculateDailyPoints = (): string => {
  const today = new Date();
  const currentYear = today.getFullYear();

  const seasons = [
    { name: 'spring', start: new Date(currentYear, 2, 1) },
    { name: 'summer', start: new Date(currentYear, 5, 1) },
    { name: 'autumn', start: new Date(currentYear, 8, 1) },
    { name: 'winter', start: new Date(currentYear, 11, 1) },
  ];

  let seasonDay = 1;

  for (let i = 0; i < seasons.length; i++) {
    const season = seasons[i];
    const nextSeason = seasons[(i + 1) % 4];

    if (today >= season.start && today < nextSeason.start) {
      seasonDay =
        Math.floor(
          (today.getTime() - season.start.getTime()) / (1000 * 60 * 60 * 24)
        ) + 1;
      break;
    }
  }

  let points: number;

  if (seasonDay === 1) {
    points = 2;
  } else if (seasonDay === 2) {
    points = 3;
  } else {
    const basePoints = 2 + (seasonDay - 1) * 1.5;
    points = Math.round(basePoints * (1 + (seasonDay - 1) * 0.1));
  }

  if (points >= 1000) {
    return `${Math.round(points / 1000)}K`;
  }

  return points.toString();
};

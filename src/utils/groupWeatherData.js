import { getTodayDate } from "./getDate";

export const processGroupedData = (groupedData) => {
  const processedData = {};

  groupedData.forEach((item) => {
    const { fcstTime, category, fcstValues } = item;

    if (!processedData[fcstTime]) {
      processedData[fcstTime] = {};
    }

    processedData[fcstTime][category] = parseFloat(fcstValues[0]);
  });

  return processedData;
};

// 두 시간 별 오늘 기상 정보 그룹화 함수
export const groupDataWithTwoHours = (data) => {
  const groupedData = {};

  const todayDate = getTodayDate();
  console.log("오늘 날짜: ", todayDate);

  data.forEach((item) => {
    const { fcstTime, fcstDate, category, fcstValue } = item;

    if (fcstDate === todayDate && isTwoHourInterval(fcstTime)) {
      const key = `${fcstTime}_${category}`;

      if (!groupedData[key]) {
        groupedData[key] = {
          fcstTime: fcstTime,
          category: category,
          fcstValues: [],
        };
      }

      groupedData[key].fcstValues.push(fcstValue);
    }
  });

  return Object.values(groupedData);
};

// fcstTime 두 시간 간격 조정 함수
const isTwoHourInterval = (fcstTime) => {
  const hours = parseInt(fcstTime.slice(-4, -2), 10);

  return hours % 2 === 0;
};

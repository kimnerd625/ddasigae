// 주소 데이터와 현재 위치 간의 거리를 계산하는 함수
export function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // 지구 반지름 (단위: km)
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // 거리 (단위: km)
  return distance;
}

// 가장 가까운 곳을 찾는 함수
export function findClosestPlace(
  currentLatitude,
  currentLongitude,
  addressData
) {
  let closestPlace = null;
  let closestDistance = Infinity;

  // 모든 주소 데이터를 순회하며 가장 가까운 곳을 찾음
  for (const place of addressData) {
    const latitude = place.위도;
    const longitude = place.경도;
    const distance = calculateDistance(
      currentLatitude,
      currentLongitude,
      latitude,
      longitude
    );

    if (distance < closestDistance) {
      closestPlace = place;
      closestDistance = distance;
    }
  }

  return closestPlace;
}

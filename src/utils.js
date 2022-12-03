/**
 * 완성되지 않은 imageUrl을 입력받아, 이미지를 불러올 수 있는 FULL URL로 반환하는 함수
 * @param {string} path url 값
 * @returns path값을 합쳐 image를 불러오는 FULL URL을 반환
 */
export function makeImagePath(path) {
  return `https://image.tmdb.org/t/p/original/${path}`;
}


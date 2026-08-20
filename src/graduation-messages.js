export const GRADUATION_MESSAGES = [
  "Chậm một chút cũng được",
  "Miễn là vẫn đang lớn lên",
  "Hãy dịu dàng với chính mình",
  "Một chiếc mèo thật đáng yêu",
  "Giữ lại những ngày thật đẹp",
  "Mọi điều rồi sẽ ổn thôi",
  "Cứ vui theo cách của mình",
  "Một góc nhỏ, thật nhiều thương",
  "Meow một tiếng rồi mỉm cười",
  "_haanzz_ đang tỏa sáng",
  "Hôm nay cũng thật dễ thương",
  "Bình yên trong thế giới nhỏ",
];

export function randomMessage() {
  return GRADUATION_MESSAGES[
    Math.floor(Math.random() * GRADUATION_MESSAGES.length)
  ];
}

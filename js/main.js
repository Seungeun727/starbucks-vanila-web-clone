const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector("#to-top");
// 화면 자체에 스크롤을 추가하면 해당 함수를 출력한다.
// 스크롤 낭비 절감: lodash의 throttle() 이용하여 스크롤 제한함.
window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if(window.scrollY > 500) {    
    // 배지 숨김
    // gsap.to(요소, 지속 시간(sec) , 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,   // 점차 투명해짐
      display: 'none'   // 실제로 요소 안보이게 함
    });

    // 버튼 보이기 
    gsap.to(toTopEl, .2, {
      x: 0,
    });

  } else {
    // 배지 보임 
    gsap.to(badgeEl, .6, {
      opacity: 1,   // 점차 투명해짐
      display: 'block'
    });

    // 버튼 숨기기 
    gsap.to(toTopEl, .2, {
      x: 100,
    });
  }
}, 300));

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
})

// _.throttle(함수, 시간(msec)) 추가. 
// forEach: 반복적인 일을 수행할 때 능률 향상됨
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    // 각 요소가 반복할 때 0.7초뒤에 시작
    delay: (index + 1) * .7,  // 0.7 -> 1.4 -> 2.1 -> 2.7초 마다 실행.
    opacity: 1
  });
});

// Swiper Running Code
// new Swiper(선택자 , 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',        // 수직 슬라이드 설정
  autoplay: true,               // 자동 재생 여부 설정
  loop: true                    // 반복 재생 여부 설정
});

new Swiper('.promotion .swiper-container', {
  // 수평 슬라이드 설정에서 horizontal은 기본값이기에 명시 x
  // direction: 'horizontal',
  slidesPerView: 3,           // 한번에 보여줄 슬라이드 개수
  spaceBetween: 4,            // 슬라이드 사이 여백
  centeredSlides: true,        // 1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000  // 0.5초 동안 delay
  // }
  pagination: {
    el: '.promotion .swiper-pagination',  // 페이지 번호 요소 선택자
    clickable: true       // 사용자 페이지 번호 요소를 시각적 및 제어 가능
  }, 
  navigation: {
    prevEl: '.promotion .swiper-prev', // 이전 슬라이드 버튼
    // CSS 속성으로 지정해줘야 뷰포트에 출력된다.
    nextEl: '.promotion .swiper-next', // 이후 슬라이드 버튼
  }
});

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev', 
    nextEl: '.awards .swiper-next', 
  }
});

// promotionToggleBtn을 클릭 했을 때 열기 / 닫기
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  // 변수 재할당
  isHidePromotion = !isHidePromotion
  if(isHidePromotion) {
    // isHidePromotion == true -> hidden
    promotionEl.classList.add('hide');
  } else {
    // isHidePromotion == false ->  show
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// 이미지 floating
function floatingObject(selector, delay, size) {
  gsap.to(
    selector,  // 선택자
    random(1.5, 2.5),  // 애니메이션 동작 시간
    {  // 옵션 처리
      y: size,
      repeat: -1,   // 무한 반복,
      yoyo: true, 
      ease: Power1.easeInOut,
      delay: random(0, delay) 
  }); 
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

 // 다시 이해 필요함  
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,    // 보여짐 여부를 감시할 요소로 지정함
      triggerHook: .8,     // 뷰포트 어떤 지점에서 감시되었음을 판단한다.
    })
    .setClassToggle(spyEl, 'show') 
    .addTo(new ScrollMagic.Controller());     
})
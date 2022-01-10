const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector(' input');

// input 검색란을 focus하는 함수 작성
searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  // 특정요소에 클래스 정보를 가진 객체에 추가함
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// 오류 해결: remove를 안하고 blur를 하였더니 검색란이 blur되지 않았음


// focus가 해제되었을 때 (blur)
searchInputEl.addEventListener('blur', function() {
  // 특정요소에 클래스 정보를 가진 객체에 추가함
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); 
console.log("Year test", thisYear.textContent);

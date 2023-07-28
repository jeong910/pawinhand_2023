//1. 모바일 메뉴 숨기기
//객체 = 모바일 메뉴 m_nav_open
//객체.속성 style.display = 'none'
//2. 햄버거 메뉴 클릭 시 모바일 메뉴 보이기
//객체 = 햄버거 메뉴 m_nav, 모바일 메뉴 m_nav_open
//속성 
//이벤트
//메서드
//3. x 버튼 클릭 시 모바일 메뉴 숨기기
//객체 = x 버튼 close, 모바일 메뉴 m_nav_open
//변수생성
const m_nav_open = document.querySelector('.m_nav_open');
const m_nav = document.querySelector('.m_nav');
const close = document.querySelector('#close');
//정상출력확인 에러메시지 또는 null, undefined 주의
console.log(m_nav, m_nav_open, close);
//1. 모바일 메뉴 숨기기
m_nav_open.style.display = 'none';
//2-1. 햄버거 메뉴 클릭 시(객체.메서드(이벤트,함수))
m_nav.addEventListener('click',function(){
    //2-2.모바일 메뉴 보이기(객체,속성,속성=값)
    m_nav_open.style.display = 'block';
})
//3-1. x 버튼 클릭 시
close.addEventListener('click',function(){
    //3-2. 모바일 메뉴 숨기기
    m_nav_open.style.display = 'none';
}) 
// main-swiper-slide
// const 변수명 = new Swiper('적용대상');
// const 변수명 = new Swiper('적용대상',{속성:값, 속성:값});
const pawin_slide = new Swiper('#pawin_slide',{
    autoplay:{
        delay:1000, //슬라이드 간격(밀리초) 기본3초
        disableOnInteraction:false,//버튼 클릭 후 자동재생 유지
    }, //자동재생
    loop:true, //자연스럽게 한방향으로 넘어가기 => 마지막 슬라이드 ->첫번째 슬라이드 자연스러운 변경 
    effect:'fade', //제자리 변경 슬라이드 효과 // direction:'vertical'
    navigation: { //이전, 다음 내비게이션 연결  
        // next,prev 객체 연결 시 부모를 안적으면 
        // body 안에 있는 모든 swiper-next,prev를 인식하기 때문에 
        // 개별인식가능한 부모이름을 반드시 앞에 먼저 작성한다.
        nextEl: '#pawin_slide .swiper-button-next', //쓸 때 앞에 꼭 부모명(공통X 개별) 꼭 쓰기 #pawin_slide
        prevEl: '#pawin_slide .swiper-button-prev',
    },
    
});


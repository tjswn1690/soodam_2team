  
/* main.js */
$(function(){
    // 메인메뉴 열기
    $('.btn_toggle').on('click',function(){
      $('#gnb').show();
    })
  
    // 메인메뉴 닫기
    $('.btn_close').on('click',function(){
      $('#gnb').hide();
    });
  
    /*** 이미지 슬라이더: fade 효과(전환)로 할것임 ****/
    let num = 1; //이미지 번호
    let slider = setInterval(function(){
        //마지막 이미지이면 처음 이미지로
      if(num > 2) { num = 0; }
      // 전체 이미지를 fade out
      $('.slider > img').removeClass('show');
      // 다음 이미지 표시
      $('.slider > img').eq(num).addClass('show');
      console.log(num)
      num++;
    }, 5000);
  
  });
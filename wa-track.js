/* Google Ads: conta cliques no WhatsApp como conversao */
(function(){
  var ID='AW-18579645451', SEND='AW-18579645451/iR29CNmP4bkdEIvIu5tF';
  var s=document.createElement('script'); s.async=true; s.src='https://www.googletagmanager.com/gtag/js?id='+ID; document.head.appendChild(s);
  window.dataLayer=window.dataLayer||[]; window.gtag=window.gtag||function(){dataLayer.push(arguments);};
  gtag('js',new Date()); gtag('config',ID);
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('a[href]'); if(!a) return;
    if(/wa\.me|whatsapp\.com/i.test(a.href)){
      gtag('event','conversion',{send_to:SEND,value:1.0,currency:'BRL',transport_type:'beacon'});
    }
  },true);
})();


$(document).ready(() => {
   const socket = io.connect();
   const nickname = $('.login-form #nickname');
   const loginform = $('.login-form');
   const messageForm  = $('.message-form');
   const messagesList = $('.messages-list');
   const usersList = $('.users-list');

   loginform.submit((e)=> {
      e.preventDefault();
      console.log(nickname.val());
      socket.emit('login', nickname.val());
   });

   //listeners
   socket.on('login', (data) => {
      if (data.status === 'OK') {
         loginform.hide();
         messageForm.removeClass('d-none');
         messagesList.removeClass('d-none');
         usersList.removeClass('d-none');
      }
   })
});
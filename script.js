const _0x1d5318=_0x566e;(function(_0x55ac9f,_0x2fe322){const _0xc6a893=_0x566e,_0x3ade17=_0x55ac9f();while(!![]){try{const _0x451cd1=parseInt(_0xc6a893(0x1e9))/0x1+-parseInt(_0xc6a893(0x1f7))/0x2+-parseInt(_0xc6a893(0x1eb))/0x3+parseInt(_0xc6a893(0x1ed))/0x4*(-parseInt(_0xc6a893(0x1d7))/0x5)+-parseInt(_0xc6a893(0x1f0))/0x6+parseInt(_0xc6a893(0x1d8))/0x7*(parseInt(_0xc6a893(0x1e7))/0x8)+parseInt(_0xc6a893(0x1f1))/0x9;if(_0x451cd1===_0x2fe322)break;else _0x3ade17['push'](_0x3ade17['shift']());}catch(_0x5c1f64){_0x3ade17['push'](_0x3ade17['shift']());}}}(_0x547f,0x57e0e));import{initializeApp}from'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';import{getDatabase,ref,push,onChildAdded}from'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';function _0x566e(_0x39866b,_0x12e9d9){const _0x547fb9=_0x547f();return _0x566e=function(_0x566e9b,_0x37e8ad){_0x566e9b=_0x566e9b-0x1c8;let _0x38ac9b=_0x547fb9[_0x566e9b];return _0x38ac9b;},_0x566e(_0x39866b,_0x12e9d9);}import{getAuth,signInAnonymously}from'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';function _0x547f(){const _0x287ef0=['Pesan\x20terlalu\x20pendek!','https://chat-app-76e7c-default-rtdb.asia-southeast1.firebasedatabase.app/','chatName','addEventListener','error','message','value','log','catch','281824vZrYDG','sendMessage','252708pxzPXB','getElementById','54885znfsJg','createElement','20gKaNnV','other','✅\x20Login\x20anonymous\x20berhasil','1274058SvdjTK','6755526qUtezB','appendChild','</span><br>','div','val','chat-box','889782BQSrPh','blur','length','❌\x20Gagal\x20login\x20anonymous:','*****','replace','</div>','📩\x20Pesan\x20baru\x20diterima:','then','✅\x20Pesan\x20berhasil\x20dikirim','getItem','chat-app-76e7c.firebaseapp.com','1:1048363596708:web:15f9d7a077521f0be7df31','Mengirim\x20pesan:','trim','1048363596708','Nama\x20tidak\x20boleh\x20kosong!','Silakan\x20masukkan\x20nama\x20terlebih\x20dahulu!','disabled','chat-app-76e7c.appspot.com','self','scrollTop','108755inWAsp','28JjnNEK','<div\x20class=\x22bubble\x22>','AIzaSyCX-xAcCqkZg4oH7v58beF7zHR_3AVTWxo','name','DOMContentLoaded','add'];_0x547f=function(){return _0x287ef0;};return _0x547f();}const firebaseConfig={'apiKey':_0x1d5318(0x1da),'authDomain':_0x1d5318(0x1cc),'databaseURL':_0x1d5318(0x1df),'projectId':'chat-app-76e7c','storageBucket':_0x1d5318(0x1d4),'messagingSenderId':_0x1d5318(0x1d0),'appId':_0x1d5318(0x1cd)},app=initializeApp(firebaseConfig),db=getDatabase(app),chatRef=ref(db,'chats'),auth=getAuth();signInAnonymously(auth)[_0x1d5318(0x1c9)](()=>console[_0x1d5318(0x1e5)](_0x1d5318(0x1ef)))[_0x1d5318(0x1e6)](_0x1ca0c5=>console[_0x1d5318(0x1e2)](_0x1d5318(0x1fa),_0x1ca0c5));const bannedWords=[/ngent[o0]t/i,/kont[o0]l/i,/pepek/i,/kntl/i,/jemb[o0]t/i];function filterMessage(_0x53d07c){return bannedWords['forEach'](_0x33682f=>{const _0x355bf0=_0x566e;_0x53d07c=_0x53d07c[_0x355bf0(0x1fc)](_0x33682f,_0x355bf0(0x1fb));}),_0x53d07c;}document['addEventListener'](_0x1d5318(0x1dc),function(){const _0x4535e3=_0x1d5318;let _0xd9c431=document[_0x4535e3(0x1ea)](_0x4535e3(0x1db)),_0x11eaed=localStorage[_0x4535e3(0x1cb)](_0x4535e3(0x1e0));_0x11eaed&&(_0xd9c431[_0x4535e3(0x1e4)]=_0x11eaed,_0xd9c431[_0x4535e3(0x1d3)]=!![]),_0xd9c431[_0x4535e3(0x1e1)](_0x4535e3(0x1f8),function(){const _0x36f6bf=_0x4535e3;let _0x3f6fbc=_0xd9c431[_0x36f6bf(0x1e4)][_0x36f6bf(0x1cf)]();if(_0x3f6fbc!==''&&!localStorage[_0x36f6bf(0x1cb)](_0x36f6bf(0x1e0)))localStorage['setItem'](_0x36f6bf(0x1e0),_0x3f6fbc),_0xd9c431[_0x36f6bf(0x1d3)]=!![];else _0x3f6fbc===''&&(alert(_0x36f6bf(0x1d1)),_0xd9c431['focus']());});}),window[_0x1d5318(0x1e8)]=function(){const _0x192594=_0x1d5318;let _0x47199e=localStorage[_0x192594(0x1cb)](_0x192594(0x1e0)),_0x2f57dc=document[_0x192594(0x1ea)]('message')[_0x192594(0x1e4)][_0x192594(0x1cf)]();if(!_0x47199e){alert(_0x192594(0x1d2));return;}if(_0x2f57dc[_0x192594(0x1f9)]<0x2){alert(_0x192594(0x1de));return;}let _0x1e0a74=filterMessage(_0x2f57dc);console[_0x192594(0x1e5)](_0x192594(0x1ce),{'name':_0x47199e,'message':_0x1e0a74}),push(chatRef,{'name':_0x47199e,'message':_0x1e0a74})['then'](()=>console[_0x192594(0x1e5)](_0x192594(0x1ca)))[_0x192594(0x1e6)](_0x20a97e=>console['error']('❌\x20Gagal\x20mengirim\x20pesan:',_0x20a97e)),document[_0x192594(0x1ea)](_0x192594(0x1e3))[_0x192594(0x1e4)]='';},onChildAdded(chatRef,_0x23cf72=>{const _0x21780d=_0x1d5318;let _0x31a1f9=_0x23cf72[_0x21780d(0x1f5)]();console[_0x21780d(0x1e5)](_0x21780d(0x1c8),_0x31a1f9);let _0x57a3f1=document[_0x21780d(0x1ea)](_0x21780d(0x1f6)),_0x3684fd=localStorage[_0x21780d(0x1cb)](_0x21780d(0x1e0)),_0x3b8e38=document[_0x21780d(0x1ec)](_0x21780d(0x1f4));_0x3b8e38['classList'][_0x21780d(0x1dd)](_0x21780d(0x1e3),_0x31a1f9[_0x21780d(0x1db)]===_0x3684fd?_0x21780d(0x1d5):_0x21780d(0x1ee)),_0x31a1f9[_0x21780d(0x1db)]!==_0x3684fd?_0x3b8e38['innerHTML']='<div\x20class=\x22bubble\x22><span\x20class=\x22name\x22>'+_0x31a1f9[_0x21780d(0x1db)]+_0x21780d(0x1f3)+_0x31a1f9[_0x21780d(0x1e3)]+_0x21780d(0x1fd):_0x3b8e38['innerHTML']=_0x21780d(0x1d9)+_0x31a1f9[_0x21780d(0x1e3)]+_0x21780d(0x1fd),_0x57a3f1[_0x21780d(0x1f2)](_0x3b8e38),_0x57a3f1[_0x21780d(0x1d6)]=_0x57a3f1['scrollHeight'];});

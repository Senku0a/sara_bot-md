//*رد بوت ساسكي تبع ايتاتشي
// معلش ي ايتاتشي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*ارحب*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*وعليكم السلام*',  
     ]; 
   }else if (/^عمي|سينكو$/i.test(m.text)) { 
     responses = [ 
'*ماذا تريد 🙂♥️*'
     ]; 
 }else if (/^فينك|سميتك$/i.test(m.text)) { 
     responses = [ 
'*سول ختك مهم تم قصفك من البوت وشكرا (سميتي سينكو) *'
     ]; 
   }else if (/^فيناهيا$/i.test(m.text)) { 
     responses = [ 
'*ماصدقاتش*'
   ]; 
   }else if (/^فينكم|فينك$/i.test(m.text)) { 
     responses = [ 
'*سول ختك*',
'*فالخوخة *',
'*ههه انتبه لسوؤالك*',
]; 
   }else if (/^تكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*تفووو اشبغيتي عندي🙁*',
'*اهرللاسف🫥*',
'*خليها على الله 🙂*',   ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*قل السلام عليكم امسخوط*',  

     ]; 
}else if (/^جاتو الحالة/i.test(m.text)) { 
     responses = [ 
       '*الحلة فختك*',  

     ]; 
   }else if (/^فلسطين$/i.test(m.text)) { 
     responses = [ 
'نموت على فيليسطين ♥️😭'
     ]; 
   } else if (/^تانحبك$/i.test(m.text)) { 
     responses = [ 
'*تفوووو نعلت الله وعليك*'
     ]; 
     }else if (/^هانية|لباس عليك|لباس$/i.test(m.text)) { 
     responses = [ 
       'الحمدالله🗿',  

     ];
     }else if (/^كاتبغيني؟$/i.test(m.text)) { 
     responses = [ 
       'واااقيلا ضربك حمار اليل',  

     ];
     }else if (/^فين لبوت$/i.test(m.text)) { 
     responses = [ 
       'البوت مات دعي معاه اعشري',  

     ];
     }else if (/^بوووت|بووت$/i.test(m.text)) { 
     responses = [ 
       '*خويا فاش كنت صغير با دبح خروف نعم خروف وسماني بسميتي*',  

     ];
     }else if (/^apk$/i.test(m.text)) { 
     responses = [ 
       '*لتنزيلي التطبيقات المرجو كتابة كويني 1*',  

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير',  

     ];
     }else if (/^صباح|$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد🧸*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^يومنا$/i.test(m.text)) { 
     responses = [ 
       '*2023/11/20*',  
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*قل السلام عليكم الله يمسخك 😂*',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;

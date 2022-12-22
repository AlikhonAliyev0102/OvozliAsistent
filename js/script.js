const btn =document.querySelector(".talk");
const content =document.querySelector(".content");

function speak(sentence){
    const text_speak = new SpeechSynthesisUtterance(sentence)

    text_speak.rate =1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}



window.addEventListener('load', ()=>{
    speak("Аудио программа активирована");

})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


recognition.onresult = (event) => {
    const current =event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase())
}

btn.addEventListener('click', ()=>{
    recognition.start()
})

function speakThis(message){
    const speech = new SpeechSynthesisUtterance();


    if(message.includes('google') ){
        window.open("http://google.com/", "_blank");
    }
    else if(message.includes('instagram') ){
        window.open("http://instagram.com/", "_blank");
    }
    else if(message.includes('привет') ){
        const finalText = "привет";
        speech.text = finalText
    }
    else if(message.includes('как дела') ){
        const finalText = "хороший";
        speech.text = finalText
    }
    else if(message.includes('telegram') ){
        window.open("http://telegram.org/", "_blank");
    }
   
    else if(message.includes('веб-камера') ){
        window.open("https://riversun.github.io/webcam.js/example/00_overview/", "_blank");
    }
    else if(message.includes('корзина') ){
        window.open("https://korzinka.uz/", "_blank");
    }
    else if(message.includes('техномарт') ){
        window.open("https://texnomart.uz/", "_blank");
    }
    



    speech.volume = 1;
    speech.rate = 1;
    speech.pitch =1;

    window.speechSynthesis.speak(speech);
}

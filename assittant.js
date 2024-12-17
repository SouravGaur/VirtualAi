const btn = document.querySelector("#btn");
const content = document.querySelector(".mic");
const voice = document.querySelector("#voice");
console.log(btn);

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text);
    text_speak.rate =1;
    text_speak.pitch =1;
    text_speak.volume =2;
    text_speak.lang ="en-US";
    window.speechSynthesis.speak(text_speak);

}
function wishMe(){
    const day = new Date();
    let hours = day.getHours();
    if(hours>=0 && hours<12){
        speak("Good Morning Sir");
    }
    else if(hours>=12 && hours<16){
        speak("good afternoon sir ");
    }
    else if(hours>=16&&hours>=24){
        speak("Good ningt maalik");
    }
}
// window.addEventListener("load",()=>{
//     wishMe();
// });

let speechRecognition= window.SpeechRecognition||window.webkitSpeechRecognition;
let recognition = new speechRecognition();


recognition.onresult=(event)=>{
    let currentIndex =event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.innerText =transcript;
    takeCommand(transcript.toLowerCase());
}
btn.addEventListener("click",()=>{
    recognition.start();
    btn.style.display="none";
    voice.style.display = "block";

})
function takeCommand(message){
    btn.style.display="flex";
    voice.style.display = "none";

    if(message.includes("hello")||message.includes("hey")||message.includes("jack")){
        speak("hello sir, how can i help you");
    }
    // else if(message.includes("chutiya")||message.includes("hijra")){
    //     speak("Aap keh rhe ho toh main hu  he");
    // }
    else if(message.includes("who are you")){
        speak("i am murari your virtual assitant created by Sourav ");

    }
    else if(message.includes("open youtube")||message.includes("YouTube")){
        speak("opening youtube")

        window.open("https://www.youtube.com");

    }
    else if(message.includes("show me big boss")||message.includes(" big boss")){
        speak("let's go it's bigboss time");
        window.open("https://www.jiocinema.com/tv-shows/bigg-boss/3499723","_blank");
    }
    else if(message.includes("how are you")||message.includes("how are you doing")||message.includes("is everything is fine")){
        speak("yes i am absoluetly fine");
     }
    else if(message.includes("open instagram")||message.includes("YouTube")){
        speak("opening Instagram" );

        window.open("https://www.instagram.com" ,"_blank");

    }
    else if(message.includes("play hazur song youtube")||message.includes("hazur")){
        speak("playing your song on youtube" );

        window.open("https://www.youtube.com/watch?v=xh_4jogs4zM" ,"_blank");

    }
    else if(message.includes("open calculator")||message.includes("claculator")){
        speak("opening claculator");

        window.open("calculator://");

    }
    else if(message.includes("time")||message.includes("what is time")){
        let time = new Date().toLocaleString(undefined ,{hour:"numeric",minute:"numeric"})
        speak(time);
    }
    else if(message.includes("date")||message.includes("what is date")){
        let date = new Date().toLocaleString(undefined ,{day:"numeric",month:"short"})
        speak(date);
    }

    else{
       let finaltext = "this is what i found on internet regarding"+message.replace("murari","");
       speak(finaltext);
       window.open(`https://www.google.com/search?client=safari&rls=en&q=${message}`,"_blank")

    }
    // Reload the page after executing the command
    setTimeout(() => {
        location.reload();
    }, 2000); // Adjust the delay as needed
}
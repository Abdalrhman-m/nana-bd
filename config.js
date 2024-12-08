var config = {
    // The length of each sentence can be arbitrary. You can write ten sentences or twenty sentences.
    // Each sentence should ideally not exceed 15 characters for better display effects.
    texts: [
        "Happy Birthday, mama ❤️🥺",     
        "النهاردة هنحتفل باحلى و اجمل وحده في الكون  ❤️🥺",  
        "يارب تكون سنة خير عليكي يا روحي",
        "و تحققي كل الي نفسك فيه",
        "انا محظوظ ان عندي ام زيك كدة 💕💕",
        "ربنا يخليكي ليا يا ست الحبايب " ,
        "بكل حب ",
        "ميدو ❤️👉👈",
    ],
    
    /**
     * Images are optional. If you want to use them, you must follow the format below:
     * "Exact text from above" : "image path, you can put the images in the imgs folder"
     * Example:
     * "Beloved cutie": "./imgs/cutie.jpg"
     *
     * If you don't want an image for a particular text, simply comment it out with two slashes. For example, the image for "Today is your birthday" will not be displayed.
     * Tip: Images are best if they are square or close to square for better visual effect.
     */
    // imgs: {
    //     "Beloved cutie": "./imgs/mom.jng",
    //     // "Today is your birthday": "./imgs/birthday.jpg",
    // },
    
    // Button text descriptions. Below are the default button texts in English, which you can change to your preferred texts.
    desc: {
        turn_on: "😊 دوسي هنا يا ماما",           
        play: "😎🕺💃! نشغل مزيكا بقا و نحتفل",              // Button to play music
        bannar_coming: "يلا نعلق الزينة ؟",     // Button to change colors
        balloons_flying: "في حاجة ناقصة؟ .. دوسي", // Button to release balloons
        cake_fadein: "تورتة؟",       // Button to reveal the cake
        light_candle: "يلا ولعي الشمع",   // Button to light the candles
        wish_message: "🦦بس كفاية عبث بقا و نركز", // Button to show birthday message
        story: "شوية كلام كدة من قلبي :)", // Button to show a special message
    }
};

let envelope = document.getElementById('envelope');
let passcodeSection = document.getElementById('passcodeSection');
let enteredPasscode = '';
let passcodeDisplay = document.getElementById('passcodeDisplay');
let passcodeMessage = document.getElementById('passcodeMessage');
let music = document.getElementById('music');
let photoGallery = document.getElementById('photoGallery');
let message = document.getElementById('message');
let photos = document.querySelectorAll('.photo');
let currentPhotoIndex = 0;
let slideshowInterval;
let currentPage = 0; // Track the current page

const paragraphs = [
  "Happy Anniversary, my love. One year ago, our story began—a story that has become the most precious part of my life. As I sit down to write this, I realize it has taken me months to put this letter together for you. I find myself lost in the countless memories we’ve created, the dreams we’ve shared, and the love that has grown so beautifully between us.",
  "Do you remember the first time we met at the bowling alley? I was just another face in the crowd, but you… you stood out like a beacon of light. Your beauty caught my attention—it was impossible not to notice you. And then, there was the day I saw you again at the bookstore. You were standing there, absorbed in the pages of a novel, and something inside me shifted. It was as if the universe whispered, Here she is—the one who will change everything.",
  "From that moment, I couldn’t help but admire everything about you—especially the way you’d pick me up at school so we could go home together. Every time you waited for me, ensuring we could walk side by side, my appreciation for you grew deeper. It made me realize that there are still people like you in the world—people who genuinely care, who go out of their way to make others feel special. You weren’t just kind; you were extraordinary.",
  "At that moment, I felt like time stopped, and all I could do was marvel at you. But I kept my feelings to myself, secretly hoping that fate would bring us closer. Little did I know, that hope would blossom into the incredible journey we’ve shared this past year.",
  "Our story has been nothing short of magical, filled with moments that make my heart swell with gratitude. I think of those late-night conversations when we bared our souls to each other, weaving our dreams and fears into the fabric of us. I remember our spontaneous adventures—the kind that left us laughing until our stomachs ached and our cheeks hurt from smiling too much.",
  "But it’s not just the big moments that make our story so special. It’s the quiet ones too. The times we simply sat together in comfortable silence, where words weren’t needed because our hearts were speaking louder. It’s in those moments that I realized what love truly is—a connection so profound, it feels like home.",
  "Of course, no love story is without its challenges, and ours is no exception. We’ve faced moments that tested our patience, understanding, and commitment. There were times when the road wasn’t smooth, when life threw us challenges that felt insurmountable. But we faced them together, hand in hand. Those struggles didn’t break us; they strengthened us. They showed me that our love isn’t just about the good times—it’s about standing by each other when the world feels heavy.",
  "Thank you, Love, for never giving up on us. Thank you for your patience, for your effort, and for every little thing you do to make our love stronger. You’ve taught me what it means to love deeply and selflessly, and for that, I am forever grateful.",
  "You inspire me in ways I never thought possible. Your kindness, your resilience, and your unwavering support make me want to be the best version of myself. With you by my side, I feel like I can achieve anything. You’re not just my partner; you’re my muse, my confidant, and the greatest blessing I could ever ask for.",
  "As I look ahead, I’m filled with excitement for the chapters yet to come. I dream of all the milestones we’ll celebrate together—the trips we’ll take, the adventures we’ll embark on, and the dreams we’ll chase as a team. But more than anything, I dream of the simple moments: waking up next to you, holding your hand on a quiet afternoon, and sharing a lifetime of love and laughter.",
  "You are my safe place, my light in the darkness, and my reason to believe in the beauty of love. With every passing day, my love for you grows deeper, stronger, and more certain. You are my always, my forever, and my everything.",
  "Thank you for making this past year the most extraordinary chapter of my life. I can’t wait to see what the future holds for us, but one thing is certain: whatever comes our way, I’ll face it with you, because you are my home.",
  "Here’s to us, Aubrey—to the love we’ve built, the memories we’ve made, and the countless adventures still ahead. Happy Anniversary, my love. You will always have my heart.",
  "Forever and always, Patpat"
];
function enterNumber(number) {
    if (enteredPasscode.length < 6) {
        enteredPasscode += number;
        passcodeDisplay.textContent = enteredPasscode;
    }
}

function clearPasscode() {
    enteredPasscode = '';
    passcodeDisplay.textContent = '----';
}

function checkPasscode() {
    const passcode = '010424'; // Correct passcode
    if (enteredPasscode === passcode) {
        passcodeMessage.style.display = 'block';
        setTimeout(() => {
            passcodeSection.style.display = 'none';  // Hide passcode section
            envelope.style.display = 'block';  // Show envelope
            envelope.style.transform = 'scale(1)';  // Envelope animation
            envelope.style.transition = 'transform 1s ease';
        }, 1000);
    } else {
        alert('Incorrect passcode!');
    }
}

// Open Envelope and Show Photo Gallery
function openEnvelope() {
    music.play();
    envelope.style.transform = 'scale(0)'; // Envelope disappears
    photoGallery.style.display = 'block';
    startSlideshow();
}

// Start the photo slideshow
function startSlideshow() {
    photos[currentPhotoIndex].classList.add('active');
    
    slideshowInterval = setInterval(() => {
        photos[currentPhotoIndex].classList.remove('active');
        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
        photos[currentPhotoIndex].classList.add('active');
    }, 2000);
}

// Stop the slideshow and show message content
function showMessage() {
    clearInterval(slideshowInterval);  // Stop the slideshow
    photoGallery.style.display = 'none'; // Hide photo gallery
    message.style.display = 'block'; // Show the letter
    showPage(currentPage); // Show the first page
}

// Show specific page (paragraph)
function showPage(pageNumber) {
    let messageContent = document.getElementById('messageContent');
    messageContent.textContent = paragraphs[pageNumber];

    // Show or hide buttons based on current page
    document.getElementById('backButton').style.display = (currentPage > 0) ? 'inline-block' : 'none';
    document.getElementById('nextButton').style.display = (currentPage < paragraphs.length - 1) ? 'inline-block' : 'none';
}

// Go to the next page
function nextPage() {
    if (currentPage < paragraphs.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}

// Go to the previous page
function goBack() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}
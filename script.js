const categoryBass = document.querySelector('.bass')
const bass1 = categoryBass.querySelector('.bass-1')
const bass2 = categoryBass.querySelector('.bass-2')
const bass3 = categoryBass.querySelector('.bass-3')
const bass4 = categoryBass.querySelector('.bass-4')
const bass5 = categoryBass.querySelector('.bass-5')
const bass6 = categoryBass.querySelector('.bass-6')

const categoryChant = document.querySelector('.chant')
const chant1 = categoryChant.querySelector('.chant-1')
const chant2 = categoryChant.querySelector('.chant-2')
const chant3 = categoryChant.querySelector('.chant-3')
const chant4 = categoryChant.querySelector('.chant-4')
const chant5 = categoryChant.querySelector('.chant-5')
const chant6 = categoryChant.querySelector('.chant-6')


const categoryClap = document.querySelector('.clap')
const clap1 = categoryClap.querySelector('.clap-1')
const clap2 = categoryClap.querySelector('.clap-2')
const clap3 = categoryClap.querySelector('.clap-3')
const clap4 = categoryClap.querySelector('.clap-4')
const clap5 = categoryClap.querySelector('.clap-5')
const clap6 = categoryClap.querySelector('.clap-6')

const categoryHithat = document.querySelector('.hithat')
const hithat1 = categoryHithat.querySelector('.hithat-1')
const hithat2 = categoryHithat.querySelector('.hithat-2')
const hithat3 = categoryHithat.querySelector('.hithat-3')
const hithat4 = categoryHithat.querySelector('.hithat-4')
const hithat5 = categoryHithat.querySelector('.hithat-5')
const hithat6 = categoryHithat.querySelector('.hithat-6')

const categoryKick = document.querySelector('.kick')
const kick1 = categoryKick.querySelector('.kick-1')
const kick2 = categoryKick.querySelector('.kick-2')
const kick3 = categoryKick.querySelector('.kick-3')
const kick4 = categoryKick.querySelector('.kick-4')
const kick5 = categoryKick.querySelector('.kick-5')
const kick6 = categoryKick.querySelector('.kick-6')

const categoryOther = document.querySelector('.other')
const other1 = categoryOther.querySelector('.other-1')
const other2 = categoryOther.querySelector('.other-2')
const other3 = categoryOther.querySelector('.other-3')
const other4 = categoryOther.querySelector('.other-4')
const other5 = categoryOther.querySelector('.other-5')
const other6 = categoryOther.querySelector('.other-6')

const categorySnap = document.querySelector('.snap')
const snap1 = categorySnap.querySelector('.snap-1')
const snap2 = categorySnap.querySelector('.snap-2')
const snap3 = categorySnap.querySelector('.snap-3')
const snap4 = categorySnap.querySelector('.snap-4')
const snap5 = categorySnap.querySelector('.snap-5')
const snap6 = categorySnap.querySelector('.snap-6')


const categorySnare = document.querySelector('.snare')
const snare1 = categorySnare.querySelector('.snare-1')
const snare2 = categorySnare.querySelector('.snare-2')
const snare3 = categorySnare.querySelector('.snare-3')
const snare4 = categorySnare.querySelector('.snare-4')
const snare5 = categorySnare.querySelector('.snare-5')
const snare6 = categorySnare.querySelector('.snare-6')


bass1.addEventListener('click', (event) => playSound('bass', '1'))
bass2.addEventListener('click', (event) => playSound('bass', '2'))
bass3.addEventListener('click', (event) => playSound('bass', '3'))
bass4.addEventListener('click', (event) => playSound('bass', '4'))
bass5.addEventListener('click', (event) => playSound('bass', '5'))
bass6.addEventListener('click', (event) => playSound('bass', '6'))


chant1.addEventListener('click', () => playSound('chant', '1'))
chant2.addEventListener('click', () => playSound('chant', '2'))
chant3.addEventListener('click', () => playSound('chant', '3'))
chant4.addEventListener('click', () => playSound('chant', '4'))
chant5.addEventListener('click', () => playSound('chant', '5'))
chant6.addEventListener('click', () => playSound('chant', '6'))

clap1.addEventListener('click', () => playSound('clap', '1'))
clap2.addEventListener('click', () => playSound('clap', '2'))
clap3.addEventListener('click', () => playSound('clap', '3'))
clap4.addEventListener('click', () => playSound('clap', '4'))
clap5.addEventListener('click', () => playSound('clap', '5'))
clap6.addEventListener('click', () => playSound('clap', '6'))

hithat1.addEventListener('click', () => playSound('hithat', '1'))
hithat2.addEventListener('click', () => playSound('hithat', '2'))
hithat3.addEventListener('click', () => playSound('hithat', '3'))
hithat4.addEventListener('click', () => playSound('hithat', '4'))
hithat5.addEventListener('click', () => playSound('hithat', '5'))
hithat6.addEventListener('click', () => playSound('hithat', '6'))

kick1.addEventListener('click', () => playSound('kick', '1'))
kick2.addEventListener('click', () => playSound('kick', '2'))
kick3.addEventListener('click', () => playSound('kick', '3'))
kick4.addEventListener('click', () => playSound('kick', '4'))
kick5.addEventListener('click', () => playSound('kick', '5'))
kick6.addEventListener('click', () => playSound('kick', '6'))

other1.addEventListener('click', () => playSound('other', '1'))
other2.addEventListener('click', () => playSound('other', '2'))
other3.addEventListener('click', () => playSound('other', '3'))
other4.addEventListener('click', () => playSound('other', '4'))
other5.addEventListener('click', () => playSound('other', '5'))
other6.addEventListener('click', () => playSound('other', '6'))

snap1.addEventListener('click', () => playSound('snap', '1'))
snap2.addEventListener('click', () => playSound('snap', '2'))
snap3.addEventListener('click', () => playSound('snap', '3'))
snap4.addEventListener('click', () => playSound('snap', '4'))
snap5.addEventListener('click', () => playSound('snap', '5'))
snap6.addEventListener('click', () => playSound('snap', '6'))

snare1.addEventListener('click', () => playSound('snare', '1'))
snare2.addEventListener('click', () => playSound('snare', '2'))
snare3.addEventListener('click', () => playSound('snare', '3'))
snare4.addEventListener('click', () => playSound('snare', '4'))
snare5.addEventListener('click', () => playSound('snare', '5'))
snare6.addEventListener('click', () => playSound('snare', '6'))

function playSound(category, number)
{
    const audio = new Audio(`drum-sounds/${category}/0${number}-${category}.wav`)
    audio.play()


    const addAction = {
        time : timeCount,
        categorySound : category,
        soundNumber : number
    }
    recordActions.push(addAction)
    console.log(recordActions)



    const target = event.path[0]
    target.style.background = 'yellow'
    setTimeout(() => 
    {
        target.style.background = '#ececec'
        
    }, 100);
}

let recordActions = []
let timeCount = 0

const timeRecord = setInterval(() => {
    timeCount = timeCount + 10
    setTimeout(() => {
        
        clearInterval(timeRecord)
    }, 10000);
}, 10);

window.addEventListener('keydown', (e) =>
{
    if(e.code == 'Space')
    {
        for(const action of recordActions)
        {
            setTimeout(() => {
                
                const audioRecorded = new Audio(`drum-sounds/${action.categorySound}/0${action.soundNumber}-${action.categorySound}.wav`)
                audioRecorded.play()
                console.log(action)
            }, action.time);
        }
    }
})
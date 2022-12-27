import { 
 buttonPlay,
 buttonPause,
 buttonStop,
 buttonSoundOn,
 buttonSoundOff,
 buttonSetting,
} from "./elements.js"

export default function  (controls, timer, sound) {

  buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countDown()
    sound.pressButton()
  })
  
  buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    sound.pressButton()
    
    
  })
  
  
  buttonStop.addEventListener('click', function () {
    controls.reset()
    timer.reset()
    sound.pressButton()
  })
  
  buttonSoundOn.addEventListener('click', function() {
    controls.soundOn()
    sound.bgAudio.pause()
  })
  
  buttonSoundOff.addEventListener('click', function() {
    controls.soundOff()
    sound.bgAudio.play()
  })
  
  buttonSetting.addEventListener('click', function() {
    let newMinutes = controls.getMinutes()
  
    if(!newMinutes) {
      timer.reset()
      return false
    }
   
    timer.updateDisplay(newMinutes,0)
    timer.updateMinutes(newMinutes)
    
  }

  )

  return {
   sound,
   timer,
   controls 
  }
}
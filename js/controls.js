

function Controls ({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSetting,
  buttonSoundOff,
  buttonSoundOn
}) {

  function play () {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSetting.classList.add('hide')
    buttonStop.classList.remove('hide')

  }

  function pause () {

    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function soundOn () {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    
  }

  function soundOff () {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
  }

  function reset () {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSetting.classList.remove('hide')
    buttonStop.classList.add('hide')
  }

  function getMinutes () {
    let newMinutes = prompt('Quantos minutos')

  if(!newMinutes) {
    return false
  }

  return newMinutes
  }
  
  return {
    reset,
    play,
    pause,
    soundOn,
    soundOff,
    getMinutes,
  }
  
}

export default Controls
  

 
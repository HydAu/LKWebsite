var theater = theaterJS()

theater
  .on('type:start, erase:start', function () {
    theater.getCurrentActor().$element.classList.add('actor__content--typing')
  })
  .on('type:end, erase:end', function () {
    theater.getCurrentActor().$element.classList.remove('actor__content--typing')
  })
  .on('type:start, erase:start', function () {
    if (theater.getCurrentActor().name === 'alpha') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  })

theater
  .addActor('alpha', { speed: 0.7, accuracy: 0.9 })
  .addActor('beta', { speed: 1, accuracy: 1 })
  .addActor('charlie', { speed: 1, accuracy: 1 })
  .addScene('alpha: Import-Module -Name .\\Inspire-Me.ps1', 800)
  .addScene('beta: "All the art of living lies in a fine mingling of letting go."',1200)
  .addScene('charlie: – Henry Ellis')
  .addScene(theater.stop)
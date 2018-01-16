var playlist = {'Queens of The Stone Age': 'The Evil Has Landed'}

function updatePlaylist(obj, artistName, songTitle) {
  return Object.assign({}, obj, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist
}
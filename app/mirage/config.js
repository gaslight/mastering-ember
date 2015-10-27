export default function() {
  this.get('/api/artists', function(db) {
    return {
      artists: db.artists
    };
  });

  this.get('/api/artists/:id', function(db, request) {
    let artist = db.artists.find(request.params.id);
    return {
      artist: artist
    };
  });

  this.get('/api/albums', function(db, request) {
    let albums = db.albums.where({ artist: request.queryParams.artist });
    let albumIds = albums.mapBy('id');
    return {
      albums: albums,
      tracks: db.tracks.filter((track) => albumIds.contains(track.album))
    };
  });
}
